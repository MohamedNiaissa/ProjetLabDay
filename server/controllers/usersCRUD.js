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
        res.status(201).send(`User successfully added`);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    try {
        await dbFetch.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
        res.status(201).send(`User modified with ID: ${id}`);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await dbFetch.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(201).send(`User deleted with ID: ${id}`);
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