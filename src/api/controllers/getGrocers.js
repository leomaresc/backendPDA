import pg from 'pg'

const db = new pg.Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "123456",
    database: "postgres"
})

await db.connect();

const getGrocers = async (req, res) => {

    let grocers = [
        {
            key: 1,
            name: "Leandro",
            counter: 0
        },
        {
            key: 2,
            name: "E. Andrés",
            counter: 0
        },
        {
            key: 3,
            name: "Lukas",
            counter: 0
        },
        {
            key: 4,
            name: "Gustavo",
            counter: 0
        },
        {
            key: 5,
            name: "Eduardo",
            counter: 0
        },
        {
            key: 6,
            name: "Alvaro",
            counter: 0
        },
        {
            key: 7,
            name: "Luis",
            counter: 0
        },
        {
            key: 8,
            name: "Aldrey",
            counter: 0
        }
    
    ]

    res.send(grocers)
    console.log(grocers)
}

export default getGrocers;