class SensorController {

    constructor(sensorService) {
        this.sensorService = sensorService;
    }

    listar = async (req, res) => {
        try {
            const sensores = await this.sensorService.listarSensores();
            res.status(200).json(sensores);
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };

    crearLectura = async (req, res) => {
        try {
            const { esNuevo, respuesta } = await this.sensorService.registrarLectura(req.body);
            res.status(esNuevo ? 201 : 200).json(respuesta);
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };
}

export default SensorController;
