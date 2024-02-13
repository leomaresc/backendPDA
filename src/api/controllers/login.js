import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(`El usuario ${username} está intentando iniciar sesión.`)

    try{
        const result = await db.query(`SELECT * FROM usuarios WHERE username=$1`, [username])
        if(result.rows.length != 0){
            const dbUsername = result.rows[0].username
            const dbPassword = result.rows[0].password
            console.log("Usuario encontrado")
            if(dbPassword === password){
                console.log(`Contraseña correcta. Usuario ${username} ha iniciado sesion!`)
                res.send(true)
            }
        } else{
            console.log("Quien tú eri")
        }
    } catch (error){
        return console.error(error)
    }

}


export default login;