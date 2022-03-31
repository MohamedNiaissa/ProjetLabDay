import dbFetch from "../config/config.js";

export const createDiscardResearch = async (req, res) => {
    const { dump, research } = req.body;

    try {
        await dbFetch.query('INSERT INTO dumpresearch (name, research, dump) VALUES ($1, $2, $3)', [res.locals.user, research, dump]);
        res.status(201).json({ message: 'Research successfully added' });
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
    const { dump, research } = req.body;

    try {
        await dbFetch.query('DELETE FROM dumpresearch WHERE name = $1 and research::jsonb = $2::jsonb and dump::jsonb = $3::jsonb', [res.locals.user, research, dump]);
        res.status(201).send("Success");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createGiveResearch = async (req, res) => {

}