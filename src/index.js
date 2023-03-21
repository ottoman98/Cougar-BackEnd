import express from "express";
const app = express();
import v1Router from './v1/routes/index.js';




const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router);


app.listen(PORT, () => {
    console.log('😎 Corriendo');
});