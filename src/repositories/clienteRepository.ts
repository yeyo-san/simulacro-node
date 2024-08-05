import { injectable } from "tsyringe";
import { Clientes } from "../models/clientes";

@injectable()
export default class clienteRepository{
    async findAll() {
        return await Clientes.findAll()
    }

    async findById(id: number) {
        return await Clientes.findByPk(id);
    }

    async create(cliente: Partial<Clientes>) {
        return await Clientes.create(cliente)
    }
    
    async update(id: number, updates: Partial<Clientes>){
        try {
            const perra = await Clientes.findByPk(id);
            
            if(!perra){
                throw new Error('Factura de cliente no fon')
            }

            return await Clientes.update(updates, {
                where : {id}
            })
            
        } catch (err) {
            console.log('No es posible actualizar la la factura del cliente', err);
        }
    }

    async delete(id: number) {
        return await Clientes.destroy({
            where: {id}
        });
    }
}