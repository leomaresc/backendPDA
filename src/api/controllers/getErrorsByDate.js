import pg from 'pg'

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const getErrorsByDate = async (req, res) => {
    const fecha = req.query.fecha
    const result = await db.query(`SELECT * FROM errores WHERE fecha=$1`, [fecha]);
    console.log(result.rows)
    res.send(JSON.stringify(result.rows))
}

export default getErrorsByDate;