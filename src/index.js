import express from "express";
import router from "./routes/products.js";
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
app.use('/uploads', express.static(path.join('opt/render/project/src/', 'public', 'uploads')));
console.log(path.join('opt/render/project/src/', 'public', 'uploads'));
console.log(path.join('public', 'uploads'));
console.log(path.join(__dirname));



app.use('/', router);










app.listen(PORT, () => {
    console.log('😎 Corriendo');
});