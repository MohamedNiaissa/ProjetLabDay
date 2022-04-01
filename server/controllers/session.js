import dbFetch from "../config/config.js";
import { encrypt, decrypt, glue, unglue } from "../middleware/crypto.js";
import { randomBytes } from 'crypto';

export const setSession = async (req, res) => {
    try {
        const session = req.session;
        const { id, cookie: { _expires } } = session;
        
        const rad = randomBytes(16);
        const iv = randomBytes(16);
        session.user = req.body.username;
        session.card = encrypt(rad, iv).token;
        const first = encrypt(session.user, iv);
        const second = encrypt(session.card, iv);
        const token = glue(first, second);

        await dbFetch.query('INSERT INTO sessions (SID, expire, sess) VALUES ($1, $2, $3)', [id, _expires, session]);
        res.status(201).json({ message: `Bienvenue ${session.user} !`, user: `${session.user}`, set: token });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSession = async (req, res, next) => {
    try {
        const result = await dbFetch.query("SELECT SID FROM sessions as s WHERE s.sess::jsonb -> 'user' ? $1 and s.sess::jsonb -> 'card' ? $2;", [res.locals.user, res.locals.card]);
        res.locals.sid = result.rows[0].sid;
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    next();
}

export const delSession = async (req, res) => {
    try {
        const result = await dbFetch.query("DELETE FROM sessions WHERE sid = $1;",[res.locals.sid]);
        if(result.rowCount === 0) throw new Error("User not found");
        res.status(201).json({ message: `Au plaisir de vous revoir ${res.locals.user} !` });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const delTrace = async (req, res) => {
    try {
        await dbFetch.query("DELETE FROM sessions as s WHERE NOT(s.sess::jsonb ? 'user');");
        res.status(201).json({ message: 'Session sanitized' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const validateCookie = (req, res, next) => {
    try {
        const unglued = unglue(req.body);
        res.locals.user = decrypt({id: unglued.id, token: unglued.user});
        res.locals.card = decrypt({id: unglued.id, token: unglued.token});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    next();
}

export const getData = (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}