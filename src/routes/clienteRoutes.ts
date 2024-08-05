import { Router } from "express";
import ClienteController from "../controllers/clientesController";

const clientesRouter = Router();

clientesRouter.get('/', ClienteController.getAllClientes)
clientesRouter.get('/:id', ClienteController.getClienteById)
clientesRouter.post('/', ClienteController.crearCliente)
clientesRouter.put('/:id', ClienteController.updateCliente)
clientesRouter.delete('/:id', ClienteController.deleteCliente)

export default clientesRouter