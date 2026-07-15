Servidor hosteado  en `http://localhost:8000`.

Endpoints: 

1. POST /lecturas

`http://localhost:8000/lecturas`


{
  "id": "SEN4A9X1",
  "tipo": "TEMPERATURA",
  "valor": 40,
  "timestamp": "2025-12-01T18:30:00Z"
}


 2. POST /lecturas (datos invalidos, para probar que el middleware haga la validacion)

`http://localhost:8000/lecturas`

{
  "id": "ABC",
  "tipo": "TEMPERATURA",
  "valor": 22,
  "timestamp": "2025-12-01T19:00:00Z"
}


3. GET /sensores

`http://localhost:8000/sensores`

4. GET /alertas

`http://localhost:8000/alertas`
