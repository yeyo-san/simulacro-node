import { Request, Response } from "express";
import { container } from "tsyringe";
import ClientesServices from "../services/clientesServices";

export default class ClienteController {
    static async getAllClientes(_: Request, res: Response){
        const _service = container.resolve(ClientesServices)
        
        try {
            const clientes = await _service.getAllClientes();

            if(!clientes){
                throw new Error('Cliente no fon')
            }
            
            res.status(200).json({ 
                status: 200,
                data: clientes
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async getClienteById( req: Request, res: Response){
        const _service = container.resolve(ClientesServices)

        try {
            const cliente = await _service.getClienteaById(parseInt(req.params.id));

            if(!cliente){
                throw new Error('Cliente no fon')
            }
            
            res.status(200).json({ 
                status: 200,
                data: cliente
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async crearCliente( req: Request, res: Response ) {
        const _service = container.resolve(ClientesServices)

        
        try {
            const cliente = await _service.crearCliente(req.body);
            
            res.status(201).json({ 
                status: 201,
                data: cliente
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    static async updateCliente( req: Request, res: Response ){
        const _service = container.resolve(ClientesServices)

        try {
            const cliente = await _service.updateCliente(parseInt(req.params.id), req.body );
            
            res.status(200).json({ 
                status: 201,
                data: cliente
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

    static async deleteCliente ( req: Request, res: Response){
        const _service = container.resolve(ClientesServices)

        try {
            const cliente = await _service.deleteCliente(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: cliente
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }
}