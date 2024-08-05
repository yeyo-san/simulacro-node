import { Router } from "express";
import PerrasController from "../controllers/perrasController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const perraRouter = Router();

perraRouter.get('/', PerrasController.getAllPerras)
perraRouter.get('/:id', PerrasController.getPerraById)
perraRouter.post('/', PerrasController.crearPerra)
perraRouter.put('/:id', authenticateJWT, PerrasController.updatePerra)
perraRouter.delete('/:id', PerrasController.deletePerra)

export default perraRouter