import { body, validationResult } from 'express-validator';
import { doesUserExist } from '../controllers/usersCRUD.js';

export const verify = (method) => {
    switch(method) {
        case 'signUp':
            return [
                body('email')
                    .exists().withMessage('Email is required.').bail()
                    .isEmail().withMessage('Provide a valid email.').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.email);
                        if(result) throw new Error("User already exist, please use another email.");
                        else return value;
                    }),
                body('password')
                    .exists().withMessage('Password is required.').bail()
                    .isLength({min:8, max:40}).withMessage("Password must be between 8 to 40 characters.").bail()
                    .custom((value, { req }) => {
                        if (value === req.body.passwordVerif) return value;
                        else throw new Error("Passwords does not match.");
                    })
            ]
        case 'logIn':
            return [
                body('email')
                        .exists().withMessage('Email is required.').bail()
                        .isEmail().withMessage('Provide a valid email.').bail()
                        .custom(async (value, { req }) => {
                            const result = await doesUserExist(req.body.email);
                            if(result) return value;
                            else throw new Error("User was not found");
                        }),
                body('password')
                    .exists().withMessage('Password is required.').bail()
                    .isLength({min:8, max:40}).withMessage("Password must be between 8 to 40 characters.")
            ]
        default: return;
    }
}

export const validate = (req, res, next) => {
    const result = validationResult(req);
    const { errors } = result;

    if (!result.isEmpty() && errors[0].param === 'email') return res.status(400).json({ message: errors[0].msg });
    if (!result.isEmpty() && errors[0].param === 'password') return res.status(400).json({ message: errors[0].msg });
    next();
}