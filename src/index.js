import express from "express";
import mongoConnection from "./databases/connection.js";
import router from "./routes/products.js";
import dotenv from "dotenv";
import path from "path";



const dotenvConfig = dotenv.config({ path: 'src/.env' });
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//middelware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'src', 'public', 'uploads')));



app.use('/', router);
//staticFiles


mongoConnection;







app.listen(PORT, () => {
    console.log('😎 Corriendo');
});