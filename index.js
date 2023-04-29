import express from "express";
import path from "path";
import cors from 'cors';
import routerV1 from "./src/v1/routes/productsRoutes.js";
//connection
import mongoConnection from "./src/databases/connection.js";


const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());



//staticFiles

app.use('/imgs', express.static(path.join(__dirname, 'public', 'uploads')));


app.use('/product/v1', routerV1);


app.listen(PORT, () => {

console.log(PORT)
    console.log('😎 Running');
});