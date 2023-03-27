import express from "express";
import controllers from "../controllers/product.js";
import upload from "../multer/multer.js";


const router = express.Router();


//create product

router
    .post('/product', upload, (req, res) => {


        controllers.productControllerPost(req, res);



    })
    .get('/product', (req, res) => {
        controllers.productControllerGet(req, res);
        console.log('get exitoso');


    })
    .put("/product/:id", (req, res) => {
        controllers.productControllerPut(req, res);
    })
    .delete("/product/:id", (req, res) => {
        controllers.productControllerDelete(req, res);

    });


export default router; 