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
app.use(express.json({ limit: '50mb' }));



//staticFiles

app.use('/imgs', express.static(path.join(__dirname, 'public', 'uploads')));





app.use('/', router);










app.listen(PORT, () => {
    console.log('😎 Corriendo');
});