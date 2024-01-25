import express from 'express';
import dotenv from 'dotenv'
import Errors from './routes/Errors.js'

dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());

app.use('/', Errors);

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto ${port}`)
})