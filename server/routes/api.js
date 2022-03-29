import express from 'express';
import { getCitiesWithZip, getDumpPerDepartment } from "../controllers/map.js";
import { createUser, deleteUser, updateUserEmail, updateUserPwd } from '../controllers/usersCRUD.js';
import { verify, validate } from '../middleware/checkForm.js';
import { setSession, getSession, getData, delSession, delTrace, validateCookie } from '../controllers/session.js';

const router = express.Router();

router.get('/department/:id/dumps', getDumpPerDepartment);
router.get('/department/:id/cities', getCitiesWithZip);
router.post('/user/create', verify("SIGNUP"), validate, createUser);
router.post('/user/open-session', verify("LOGIN"), validate, setSession);
router.post('/user/close-session', validateCookie, getSession, delSession);
router.post('/user/sanitize-session', delTrace);
router.post('/user/delete', validateCookie, getSession, deleteUser);
router.post('/user/update-email', validateCookie, verify("EMAIL"), validate, updateUserEmail);
router.post('/user/update-pwd', validateCookie, verify("PWD"), validate, updateUserPwd);

export default router;