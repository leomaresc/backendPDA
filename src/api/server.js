import express from 'express';
import dotenv from 'dotenv'
import Errors from './routes/Errors.js'
import http from 'http'


const app = express();
const hostname = "10.101.46.136";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end();
  });

app.use(express.json());
app.use(express.urlencoded({extended:false}));

dotenv.config();

app.use('/', Errors);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});