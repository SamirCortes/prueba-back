import { Request, Response } from 'express';
import { validateResult } from '../utils/common';
import { getListProyectos } from '../services/proyectos.service';

export const getList = async (req: Request, res: Response) => {

    try {
        const result = await getListProyectos();
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};


