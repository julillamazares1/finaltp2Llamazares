class NotificacionService {

    enviarAlerta = async (alerta) => {
        console.log(`Mail enviado -> sensor ${alerta.id} (${alerta.tipo}): ${alerta.alerta}`);
    };
}

export default NotificacionService;
