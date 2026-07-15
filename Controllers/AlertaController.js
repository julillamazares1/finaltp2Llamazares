class AlertaController {

    constructor(alertaService) {
        this.alertaService = alertaService;
    }

    listar = async (req, res) => {
        try {
            const alertas = await this.alertaService.listarAlertas();
            res.status(200).json(alertas);
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };
}

export default AlertaController;
