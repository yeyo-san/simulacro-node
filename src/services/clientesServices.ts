import clienteRepository from "../repositories/clienteRepository";
import { inject, injectable } from "tsyringe";
import { Clientes } from "../models/clientes";
 

@injectable()
export default class ClientesServices {
    constructor(@inject(clienteRepository) private clienteRepository: clienteRepository){}

    async getAllClientes(){
        return await this.clienteRepository.findAll()
    }

    async getClienteaById(id: number) {
        return await this.clienteRepository.findById(id)
    }

    async crearCliente(perra: Partial<Clientes>){
        return await this.clienteRepository.create(perra)
    }

    async updateCliente(id: number, update: Partial<Clientes>){
        return await this.clienteRepository.update(id, update)
    }

    async deleteCliente(id: number){
        return await this.clienteRepository.delete(id)
    }
}