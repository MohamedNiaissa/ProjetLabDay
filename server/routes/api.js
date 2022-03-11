import express from 'express';
import { getCitiesWithZip, getDumpPerDepartment } from "../controllers/map.js";
import { createUser } from '../controllers/usersCRUD.js';
import { verify, validate } from '../middleware/checkForm.js';
import { setSession, getSession, delSession, delTrace, validateCookie } from '../controllers/session.js';

const router = express.Router();

router.get('/department/:id/dumps', getDumpPerDepartment);
router.get('/department/:id/cities', getCitiesWithZip);
router.post('/user/create', verify("signUp"), validate, createUser);
router.post('/user/open-session', verify("logIn"), validate, setSession);
router.post('/user/close-session', validateCookie, getSession, delSession);
router.post('/user/sanitize-session', delTrace);

export default router;