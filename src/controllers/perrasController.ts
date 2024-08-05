import { Request, Response } from "express";
import { container } from "tsyringe";
import PerrasServices from "../services/perrasServices";
import upload from "../middlewares/multerConfig";

export default class PerrasController {
    static async getAllPerras(_: Request, res: Response){
        const _service = container.resolve(PerrasServices)
        
        try {
            const perras = await _service.getAllPerras();

            if(!perras){
                throw new Error('Perras no fon')
            }
            
            res.status(200).json({ 
                status: 200,
                data: perras
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async getPerraById( req: Request, res: Response){
        const _service = container.resolve(PerrasServices)

        try {
            const perra = await _service.getPerraById(parseInt(req.params.id));

            if(!perra){
                throw new Error('Perra no fon')
            }
            
            res.status(200).json({ 
                status: 200,
                data: perra
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async crearPerra( req: Request, res: Response ) {
        upload.single('image')(req, res, async (err: any) =>{
           
            const _service = container.resolve(PerrasServices)
            const data = {
                name: req.body.name,
                tamañoDelCuloDeUnoADiez: parseInt(req.body['tamañoDelCuloDeUnoADiez'], 10),
                email: req.body.email
            };
            console.log(data);
            console.log('File Upload Successful:', req.file);
            console.log('Request Body:', req.body);
            
            const imagePath = req.file
                ?`http://localhost:3000/yeyoPerrasHouse/uploads/${req.file.filename}`
                : null
    
            
            try {
                // if (!data.name || !data.tamañoDelCuloDeUnoADiez || !data.email) {
                //     return res.status(400).json({
                //         status: 400,
                //         message: "Required fields are missing"
                //     });
                // }
    
                const token = await _service.crearPerra({
                    ...data,
                    image_url: imagePath,
                });

                console.log(token);
                
                
                res.status(201).json({ 
                    status: 201,
                    message: 'Created successfully',
                    token
                })
            } catch (err) {
                res.status(400).json({ 
                    status: 400,
                    data: err
                })   
        }
        })
    }

    static async updatePerra( req: Request, res: Response ){
        const _service = container.resolve(PerrasServices)

        try {
            const perra = await _service.updatePerra(parseInt(req.params.id), req.body );
            
            res.status(200).json({ 
                status: 201,
                data: perra
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    static async deletePerra ( req: Request, res: Response){
        const _service = container.resolve(PerrasServices)

        try {
            const perra = await _service.deletePerra(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: perra
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }
}