import express from 'express';
import { getCitiesWithZip, getDumpPerDepartment } from "../controllers/map.js";
import { createUser, getUserById } from '../controllers/usersCRUD.js';
import { verify, validate } from '../middleware/checkForm.js';

const router = express.Router();

router.get('/department/:id/dumps', getDumpPerDepartment);
router.get('/department/:id/cities', getCitiesWithZip);
router.post('/user/create', verify("signUp"), validate, createUser);
router.post('/user/log', verify("logIn"), validate, getUserById);

export default router;