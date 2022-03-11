import { Response } from 'express';

export const validateResult = (result: any, res: Response) => {
    return res.status(result.error ? 400 : 200).json(result);
}

