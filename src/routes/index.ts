import { Router } from "express";
import proyectosRoutes from './proyectos.routes';

const router = Router();

router.use('/proyectos', proyectosRoutes);

export default router;