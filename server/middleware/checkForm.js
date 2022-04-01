import { body, cookie, validationResult } from 'express-validator';
import { doesUserExist, doesUserAuthExist } from '../controllers/usersCRUD.js';
import { unglue, decrypt } from './crypto.js';

export const verify = (method) => {
    switch(method) {
        case 'SIGNUP':
            return [
                body('username')
                    .exists().withMessage('Le pseudo est obligatoire').bail()
                    .isLength({min: 1, max: 40}).withMessage('Le pseudo doit être compris entre 0 et 40 caractères').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.username, "username");
                        if(result) throw new Error("Un utilisateur existe déjà avec ce pseudo, choisissez en un autre");
                        else return value;
                    }),
                body('email')
                    .exists().withMessage("L'email est obligatoire").bail()
                    .isEmail().withMessage("Cet email n'est pas valide").bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.email, "email");
                        if(result) throw new Error("Un utilisateur utilise déjà cet email, choisissez en un autre");
                        else return value;
                    }),
                body('password')
                    .exists().withMessage('Le mot de passe est obligatoire').bail()
                    .isLength({min:8, max:40}).withMessage("Le mot de passe doit être compris entre 8 et 40 caractères").bail()
                    .custom((value, { req }) => {
                        if (value === req.body.passwordVerif) return value;
                        else throw new Error("Les mots de passe ne sont pas identiques.");
                    })
            ]
        case 'LOGIN':
            return [
                body('username')
                    .exists().withMessage('Le pseudo est obligatoire').bail()
                    .isLength({min: 1, max: 40}).withMessage('Le pseudo doit être compris entre 0 et 40 caractères').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.username, "username");
                        if(result) return value;
                        else throw new Error(`L'utilisateur ${req.body.username} n'existe pas`);
                    }),
                body('password')
                    .exists().withMessage('Le mot de passe est obligatoire').bail()
                    .isLength({min:8, max:40}).withMessage("Le mot de passe doit être compris entre 8 et 40 caractères")
                    .custom(async (value, { req }) => {
                        const result = await doesUserAuthExist(req.body.username, value);
                        console.log(result)
                        if(!result) throw new Error("Le mot de passe est invalide");
                        else return value;
                    }),
            ]
        case 'EMAIL':
            return [
                body('email')
                    .exists().withMessage("L'email est obligatoire").bail()
                    .isEmail().withMessage("Cet email n'est pas valide").bail()
                    .custom(async (value) => {
                        const result = await doesUserExist(value, "email");
                        if(result) throw new Error("Un utilisateur utilise déjà cet email, choisissez en un autre");
                        else return value;
                    }),
                body('password')
                    .exists().withMessage('Le mot de passe est obligatoire').bail()
                    .isLength({min:8, max:40}).withMessage("Le mot de passe doit être compris entre 8 et 40 caractères").bail()
                    .custom(async (value, {req}) => {
                        const unglued = unglue(req.body);
                        const user = decrypt({id: unglued.id, token: unglued.user});

                        const result = await doesUserAuthExist(user, value);
                        if(!result) throw new Error("Le mot de passe est invalide");
                        else return value;
                    }),
            ]
        case 'PWD':
            return [
                body('password')
                    .exists().withMessage('Le mot de passe est obligatoire').bail()
                    .isLength({min:8, max:40}).withMessage("Le mot de passe doit être compris entre 8 et 40 caractères").bail()
                    .custom(async (value, {req}) => {
                        const unglued = unglue(req.body);
                        const user = decrypt({id: unglued.id, token: unglued.user});

                        const result = await doesUserAuthExist(user, value);
                        if(!result) throw new Error("Le mot de passe actuel est invalide");
                        else return value;
                    }),
                body('newPassword')
                    .exists().withMessage('Le mot de passe est obligatoire').bail()
                    .isLength({min:8, max:40}).withMessage("Le mot de passe doit être compris entre 8 et 40 caractères")
                    .custom((value, { req }) => {
                        if (value === req.body.verif) return value;
                        else throw new Error("Les mots de passe ne sont pas identiques.");
                    })
            ]
        default: return;
    }
}

export const validate = (req, res, next) => {
    const result = validationResult(req);
    const { errors } = result;

    console.log(result)

    if(!result.isEmpty() && errors[0].param === 'username') return res.status(400).json({ message: errors[0].msg })
    if(!result.isEmpty() && errors[0].param === 'email') return res.status(400).json({ message: errors[0].msg });
    if(!result.isEmpty() && errors[0].param === 'password') return res.status(400).json({ message: errors[0].msg });
    if(!result.isEmpty() && errors[0].param === 'newPassword') return res.status(400).json({ message: errors[0].msg });
    next();
}