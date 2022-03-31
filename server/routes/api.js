import express from 'express';
import { getCitiesWithZip, getDumpPerDepartment } from "../controllers/map.js";
import { createUser, deleteUser, updateUserEmail, updateUserPwd } from '../controllers/usersCRUD.js';
import { verify, validate } from '../middleware/checkForm.js';
import { setSession, getSession, delSession, delTrace, validateCookie } from '../controllers/session.js';
import { createDiscardResearch, createGiveResearch, deleteDiscardResearch, fetchDiscardResearch } from '../controllers/research.js';

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
router.post('/user/save-discard-research', validateCookie, createDiscardResearch);
router.post('/user/fetch-discard-research', validateCookie, fetchDiscardResearch)
router.post('/user/delete-discard-research', validateCookie, deleteDiscardResearch)
router.post('/user/save-give-research', validateCookie, createGiveResearch);

export default router;