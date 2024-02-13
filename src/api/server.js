import express from 'express';
import dotenv from 'dotenv';
import Errors from './routes/Errors.js';
import LoginRegister from './routes/LoginRegister.js'

const app = express();
// Para que funcionen las pruebas en expo se debe cocolor aquí de manera manual la ipv4 de la maquina donde se está ejecutando el servidor.
const hostname = "10.101.46.136";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.use('/', Errors);
app.use('/', LoginRegister)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});