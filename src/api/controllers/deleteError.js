import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const deleteError = async (req, res) => {
    const data = req.body;
    await db.query('DELETE FROM errores WHERE id=$1', [data.id])

    res.sendStatus(200);
}

export default deleteError;