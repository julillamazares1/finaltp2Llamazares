class AlertaService {

    constructor(alertaDao) {
        this.alertaDao = alertaDao;
    }

    listarAlertas = async () => {
        return this.alertaDao.getAll();
    };
}

export default AlertaService;
