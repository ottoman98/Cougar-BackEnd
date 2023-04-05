import express from "express";
import routerV1 from "./v1/routes/productsRoutes.js";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
//connection
import mongoConnection from "./databases/connection.js";


const dotenvConfig = dotenv.config({ path: 'src/.env' });
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//middelware
app.use(cors());
app.use(express.json());



//staticFiles

app.use('/imgs', express.static(path.join(__dirname, 'public', 'uploads')));

app.use('/', routerV1);


app.listen(PORT, () => {
    console.log('😎 Corriendo');
});