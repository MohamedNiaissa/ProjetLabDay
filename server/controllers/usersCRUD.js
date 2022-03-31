import dbFetch from "../config/config.js";
import { encrypt, decrypt, glue, unglue } from "../middleware/crypto.js";
import { randomBytes } from 'crypto';

export const getUserById = async (req, res) => {
    const { email } = req.body;

    try {
        await dbFetch.query("SELECT id FROM users WHERE email = $1", [email]);
        res.status(201).json({ message: 'User successfully fetched' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { username, email } = req.body;
    const password = encrypt(req.body.password, randomBytes(16));

    try {
        await dbFetch.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [username, email, password]);
        res.status(201).json({ message: 'User successfully added' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUserEmail = async (req, res) => {
    const user = res.locals.user;
    const { email } = req.body;

    try {
        await dbFetch.query('UPDATE users SET email = $1 WHERE name = $2', [email, user]);
        res.status(201).send(`User data successfully modified.`);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUserPwd = async (req, res) => {
    const user = res.locals.user;
    const { newPassword } = req.body;
    const password = encrypt(newPassword, randomBytes(16));

    try {
        await dbFetch.query('UPDATE users SET password = $1 WHERE name = $2', [password, user]);
        res.status(201).send(`User data successfully modified.`);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await dbFetch.query('DELETE FROM users WHERE name = $1', [res.locals.user]);
        res.status(201).send(`User deleted with ID: ${res.locals.user}`);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const doesUserExist = async (value, query) => {
    if(query === "email") {
        try {
            const result = await dbFetch.query("SELECT '' FROM users WHERE email = $1", [value]);
            return result.rowCount > 0 ? true : false;
        } catch {
            res.status(409).json({ message: error.message });
        }
    }else {
        try {
            const result = await dbFetch.query("SELECT '' FROM users WHERE name = $1", [value]);
            return result.rowCount > 0 ? true : false;
        } catch {
            res.status(409).json({ message: error.message });
        }
    }
}

export const doesUserAuthExist = async (user, pass) => {
    try {
        const result = await dbFetch.query("SELECT password FROM users WHERE name = $1", [user]);
        const {id, token} = JSON.parse(result.rows[0].password)
        const password = decrypt({id: id, token: token});
        return pass === password ? true : false;
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}