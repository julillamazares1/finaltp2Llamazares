import Sensor from "../Model/Sensor.js";
import Alerta from "../Model/Alerta.js";

const UMBRALES = {
    TEMPERATURA: { excede: (valor) => valor > 35, mensaje: "TEMPERATURA alta" },
    HUMEDAD: { excede: (valor) => valor < 20, mensaje: "HUMEDAD baja" },
    CO2: { excede: (valor) => valor > 1000, mensaje: "CO2 alto" },
};

class SensorService {

    constructor(sensorDao, alertaDao, notificacionService) {
        this.sensorDao = sensorDao;
        this.alertaDao = alertaDao;
        this.notificacionService = notificacionService;
    }

    registrarLectura = async ({ id, tipo, valor, timestamp }) => {
        const sensor = new Sensor(id, tipo, valor, timestamp);
        const esNuevo = await this.sensorDao.upsert(sensor);

        const umbral = UMBRALES[tipo];
        const mensajeAlerta = umbral && umbral.excede(valor) ? umbral.mensaje : null;

        if (mensajeAlerta) {
            const alerta = new Alerta(id, tipo, valor, timestamp, mensajeAlerta);
            await this.alertaDao.create(alerta);
            await this.notificacionService.enviarAlerta(alerta);
        }

        return {
            esNuevo,
            respuesta: { id, tipo, valor, timestamp, alerta: mensajeAlerta },
        };
    };

    listarSensores = async () => {
        return this.sensorDao.getAll();
    };
}

export default SensorService;
