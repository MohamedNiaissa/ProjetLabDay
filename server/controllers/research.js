import dbFetch from "../config/config.js";

export const createDiscardResearch = async (req, res) => {
    try {
        const { dump, research } = req.body;
        await dbFetch.query('INSERT INTO dumpresearch (name, research, dump) VALUES ($1, $2, $3)', [res.locals.user, research, dump]);
        res.status(201).json({ message: 'Recherche sauvegarder !' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchDiscardResearch = async (req, res) => {
    try {
        const { rows } = await dbFetch.query('SELECT research, dump FROM dumpresearch WHERE name = $1', [res.locals.user]);
        res.status(201).send(rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteDiscardResearch = async (req, res) => {
    try {
        const { dump, research } = req.body;
        await dbFetch.query('DELETE FROM dumpresearch WHERE name = $1 and research::jsonb = $2::jsonb and dump::jsonb = $3::jsonb', [res.locals.user, research, dump]);
        res.status(201).send("Success");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createGiveResearch = async (req, res) => {
    try {
        const { assos, research } = req.body;
        await dbFetch.query('INSERT INTO assosresearch (name, research, assos) VALUES ($1, $2, $3)', [res.locals.user, research, assos]);
        res.status(201).json({ message: 'Recherche sauvegarder !' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchGiveResearch = async (req, res) => {
    try {
        const { rows } = await dbFetch.query('SELECT research, assos FROM assosresearch WHERE name = $1', [res.locals.user]);
        res.status(201).send(rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteGiveResearch = async (req, res) => {
    try {
        const { assos, research } = req.body;
        await dbFetch.query('DELETE FROM assosresearch WHERE name = $1 and research::jsonb = $2::jsonb and assos::jsonb = $3::jsonb', [res.locals.user, research, assos]);
        res.status(201).send("Success");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}