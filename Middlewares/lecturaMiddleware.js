const TIPOS_VALIDOS = ["TEMPERATURA", "HUMEDAD", "CO2"];
const ID_REGEX = /^[A-Za-z0-9]{8}$/;

const validarLectura = (req, res, next) => {
    const { id, tipo, valor, timestamp } = req.body;

    if (typeof id !== "string" || !ID_REGEX.test(id)) {
        return res.status(400).json({ errorMsg: "id invalido: debe ser un codigo alfanumerico de 8 caracteres" });
    }

    if (!TIPOS_VALIDOS.includes(tipo)) {
        return res.status(400).json({ errorMsg: `tipo invalido: debe ser uno de ${TIPOS_VALIDOS.join(", ")}` });
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return res.status(400).json({ errorMsg: "valor invalido: debe ser numerico" });
    }

    if (typeof timestamp !== "string") {
        return res.status(400).json({ errorMsg: "timestamp invalido: debe ser un string" });
    }

    next();
};

export default validarLectura;
