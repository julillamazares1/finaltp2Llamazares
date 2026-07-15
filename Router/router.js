import { Router } from 'express';
import { sensorController, alertaController } from "../Containers/container.js";
import validarLectura from "../Middlewares/lecturaMiddleware.js";

const router = Router();

router.get("/sensores", sensorController.listar);
router.post("/lecturas", validarLectura, sensorController.crearLectura);
router.get("/alertas", alertaController.listar);

export default router;
