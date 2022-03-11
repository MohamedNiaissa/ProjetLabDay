import { createCipheriv, createDecipheriv } from 'crypto';
import { encryptSettings } from '../config/config.js';


export const encrypt = (text, iv) => {
    const { cr, ky } = encryptSettings();
    const cipher = createCipheriv(cr, ky, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        id: iv.toString('hex'),
        token: encrypted.toString('hex')
    };
};

export const decrypt = (hash) => {
    const {cr, ky} = encryptSettings();
    const decipher = createDecipheriv(cr, ky, Buffer.from(hash.id, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.token, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

export const glue = (hash1, hash2) => {
    return { token: hash1.id + hash2.token + hash1.token }
}

export const unglue = (hash) => {
    return {
        id: hash.token.substring(0,32),
        token: hash.token.substring(32,96),
        user: hash.token.substring(96)
    }
}