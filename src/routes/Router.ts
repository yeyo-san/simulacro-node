import { Router } from "express";
import perraRouter from "./perraRouter";
import clientesRouter from "./clienteRoutes";
import { fileRouter } from "./fileRouter";

const router = Router();

router.use('/perras', perraRouter)
router.use('/clientes', clientesRouter)
router.use('/uploads', fileRouter)

export default router