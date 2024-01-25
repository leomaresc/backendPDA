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
    db.query('INSERT INTO errores(fecha, supervisor, ruta, nombre, categoria, error, observacion) VALUES($1, $2, $3, $4, $5, $6, $7)', [req.body.fecha, req.body.supervisor, req.body.ruta, req.body.nombre, req.body.categoria, req.body.error, req.body.observacion])
    res.sendStatus(200);
}

export default postError;