import express from 'express';
import { getCitiesWithZip, getDumpPerDepartment } from "../controllers/map.js";

const router = express.Router();

router.get('/:id/dumps', getDumpPerDepartment);
router.get('/:id/cities', getCitiesWithZip);

export default router;