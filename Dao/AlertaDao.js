
class AlertaDao {

    data = [];

    getAll = async () => {
        return this.data;
    };

    create = async (alerta) => {
        this.data.push(alerta);
        return alerta;
    };
}

export default AlertaDao;
