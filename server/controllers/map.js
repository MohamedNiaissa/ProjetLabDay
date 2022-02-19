import dbFetch from "../config/config.js";


export const getCitiesWithZip = async (req, res) => {
    const department = req.params.id;
    const { zip } = req.query;

    try {
        let { rows } = await dbFetch.query('SELECT * FROM cities WHERE department = $1', [department]);
        if(zip) rows = rows.filter(r => r.zip === zip);
        res.status(201).send(rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getDumpPerDepartment = async (req, res) => {
    const department = req.params.id;

    try {
        const { rows } = await dbFetch.query('SELECT * FROM dumps WHERE department = $1', [department]);
        res.status(201).send(rows);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}