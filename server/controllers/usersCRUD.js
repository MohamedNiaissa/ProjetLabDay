import dbFetch from "../config/config.js";

export const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const result = await dbFetch.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(201).send(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        const result = await dbFetch.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        res.status(201).send(`User added with ID: ${result.insertId}`);
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