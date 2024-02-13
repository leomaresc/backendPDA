import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const postError = async (req, res) => {
    const data = req.body;
    await db.query('INSERT INTO errores (fecha, supervisor, ruta, nombre, categoria, error, observacion) VALUES ($1, $2, $3, $4, $5, $6, $7)', [data.fecha, data.supervisor, data.ruta, data.nombre, data.categoria, data.error, data.observacion])

    res.sendStatus(200);
}

export default postError;