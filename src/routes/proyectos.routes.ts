import { Router } from "express";
import { getList } from '../controllers/proyecto.controller';

const router = Router();

router.get('/',
    getList);

export default router;