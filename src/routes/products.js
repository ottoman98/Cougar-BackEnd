import express from "express";
import productcontroller from "../controllers/product.js";
import upload from "../multer/multer.js";


const router = express.Router();


//create product

router.post('/product', upload, (req, res) => {


    productcontroller(req, res);



});


export default router; 