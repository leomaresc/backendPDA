import pg from "pg";

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const getUsers = async (req, res) => {
    
}

export default getUsers;