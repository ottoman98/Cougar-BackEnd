import express from "express";
import path from "path";
import cors from 'cors';
import routerV1 from "./v1/routes/productsRoutes.js";
//connection
import mongoConnection from "./databases/connection.js";


const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors(['http://localhost:5173']));
app.use(express.json());



//staticFiles

app.use('/imgs', express.static(path.join(__dirname, 'public', 'uploads')));


app.use('/product/v1', routerV1);


app.listen(PORT, () => {


    console.log('😎 Running');
});