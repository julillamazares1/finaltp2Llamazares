
class Alerta {
    constructor(id, tipo, valor, timestamp, mensaje) {
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
        this.timestamp = timestamp;
        this.alerta = mensaje;
    }
}

export default Alerta;
