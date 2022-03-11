import { body, cookie, validationResult } from 'express-validator';
import { doesUserExist } from '../controllers/usersCRUD.js';

export const verify = (method) => {
    switch(method) {
        case 'signUp':
            return [
                body('username')
                    .exists().withMessage('Username is required').bail()
                    .isLength({min: 1, max: 40}).withMessage('Username must be between 1 to 40 characters.').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.username, "username");
                        if(result) throw new Error("User already exist, please use another username.");
                        else return value;
                    }),
                body('email')
                    .exists().withMessage('Email is required.').bail()
                    .isEmail().withMessage('Provide a valid email.').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.email, "email");
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
                body('username')
                    .exists().withMessage('Username is required').bail()
                    .isLength({min: 1, max: 40}).withMessage('Username must be between 1 to 40 characters.').bail()
                    .custom(async (value, { req }) => {
                        const result = await doesUserExist(req.body.username, "username");
                        if(result) return value;
                        else throw new Error("User not found");
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

    console.log(result)

    if(!result.isEmpty() && errors[0].param === 'username') return res.status(400).json({ message: errors[0].msg })
    if(!result.isEmpty() && errors[0].param === 'email') return res.status(400).json({ message: errors[0].msg });
    if(!result.isEmpty() && errors[0].param === 'password') return res.status(400).json({ message: errors[0].msg });
    next();
}