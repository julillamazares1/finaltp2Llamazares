
class SensorDao {

    data = [];

    getAll = async () => {
        return this.data;
    };

    getById = async (id) => {
        return this.data.find((sensor) => sensor.id === id) || null;
    };

    upsert = async (sensor) => {
        const index = this.data.findIndex((s) => s.id === sensor.id);
        const esNuevo = index === -1;

        if (esNuevo) {
            this.data.push(sensor);
        } else {
            this.data[index] = sensor;
        }

        return esNuevo;
    };
}

export default SensorDao;
