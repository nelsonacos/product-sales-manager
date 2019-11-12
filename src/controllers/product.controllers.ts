import { Request, Response } from 'express';

export async function helloWorld(req: Request, res: Response): Promise<Response>{
    return await res.json({
        message: "Hello World"
    });
}