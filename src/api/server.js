import express from 'express';
import dotenv from 'dotenv';
import Errors from './routes/Errors.js';

const app = express();
const hostname = "10.101.46.136";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.use('/', Errors);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});