import express from 'express';
import dotenv from 'dotenv';

import Errors from './src/api/routes/Errors.js';
import Grocers from './src/api/routes/Grocers.js'
import LoginRegister from './src/api/routes/LoginRegister.js'
import Kpi from './src/api/routes/Kpi.js'

const app = express();
// Para que funcionen las pruebas en expo se debe cocolor aquí de manera manual la ipv4 de la maquina donde se está ejecutando el servidor.
const hostname = "localhost";
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.use('/', Errors);
app.use('/', LoginRegister)
app.use('/', Grocers)
app.use('/', Kpi)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});