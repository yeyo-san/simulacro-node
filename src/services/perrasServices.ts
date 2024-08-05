import PerraRepository from "../repositories/perrasUserRepository";
import { inject, injectable } from "tsyringe";
import { Perras } from "../models/chambePerras";
import { SECRET_KEY } from "../middlewares/authMiddleware";
import jwt from 'jsonwebtoken'

@injectable()
export default class PerrasServices {
    constructor(@inject(PerraRepository) private perraRepository: PerraRepository){}

    async getAllPerras(){
        return await this.perraRepository.findAll()
    }

    async getPerraById(id: number) {
        return await this.perraRepository.findById(id)
    }

    async crearPerra(perra: Partial<Perras>){
        await this.perraRepository.create(perra)
        const token = jwt.sign(perra, SECRET_KEY, { expiresIn: "1h" })
        
        return token 
    }

    async updatePerra(id: number, update: Partial<Perras>){
        return await this.perraRepository.update(id, update)
    }

    async deletePerra(id: number){
        await this.perraRepository.delete(id)
        
        return 
    }
}