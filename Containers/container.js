import SensorDao from "../Dao/SensorDao.js";
import AlertaDao from "../Dao/AlertaDao.js";
import NotificacionService from "../Services/NotificacionService.js";
import SensorService from "../Services/SensorService.js";
import AlertaService from "../Services/AlertaService.js";
import SensorController from "../Controllers/SensorController.js";
import AlertaController from "../Controllers/AlertaController.js";

const sensorDao = new SensorDao();
const alertaDao = new AlertaDao();
const notificacionService = new NotificacionService();

const sensorService = new SensorService(sensorDao, alertaDao, notificacionService);
const alertaService = new AlertaService(alertaDao);

const sensorController = new SensorController(sensorService);
const alertaController = new AlertaController(alertaService);

export { sensorController, alertaController };
