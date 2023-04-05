import express from "express";
import routerV1 from "./v1/routes/productsRoutes.js";
import path from "path";
import cors from 'cors';
//connection
import mongoConnection from "./databases/connection.js";


const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

//staticFiles
app.use('/imgs', express.static(path.join(__dirname, 'public', 'uploads')));

//route

app.use('/product/v1', routerV1);


app.listen(PORT, () => {
    console.log('😎 Corriendo');
});