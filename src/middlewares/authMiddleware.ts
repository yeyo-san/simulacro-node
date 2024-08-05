import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const SECRET_KEY = 'hagachateyconocelo'

declare global {
    namespace Express {
        interface Request{
            user?: any
        }
    }
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.params.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1]
    

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if(err){
                return res.sendStatus(403)
            }

            req.user = user
            next();
        })
    } else{
        res.sendStatus(401)
    }
}