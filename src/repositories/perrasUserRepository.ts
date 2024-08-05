import { injectable } from "tsyringe";
import { Perras } from "../models/chambePerras";
import { CreationAttributes } from "sequelize";

@injectable()
export default class PerraRepository{
    async findAll() {
        return await Perras.findAll()
    }

    async findById(id: number) {
        return await Perras.findByPk(id);
    }

    async create(perra: Partial<Perras>) {
        return await Perras.create(perra)
    }
    
    async update(id: number, updates: Partial<Perras>){
        try {
            const perra = await Perras.findByPk(id);
            
            if(!perra){
                throw new Error('Perra no fon')
            }

            return await Perras.update(updates, {
                where : {id}
            })

        } catch (err) {
            console.log('No es posible actualizar la perra', err);
        }
    }

    async delete(id: number) {
        return await Perras.destroy({
            where: {id}
        });
    }
}