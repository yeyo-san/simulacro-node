import { container } from "tsyringe";
import PerrasServices from "../services/perrasServices";
import PerraRepository from "../repositories/perrasUserRepository";
import ClientesServices from "../services/clientesServices";
import clienteRepository from "../repositories/clienteRepository";

container.registerSingleton<PerrasServices>(PerrasServices)
container.registerSingleton<PerraRepository>(PerraRepository)
container.registerSingleton<ClientesServices>(ClientesServices)
container.registerSingleton<clienteRepository>(clienteRepository)
