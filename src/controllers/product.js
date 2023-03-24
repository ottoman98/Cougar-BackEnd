import { json } from "express";
import productSchema from "../models/productSchema.js";


const productControllerPost = (req, res) => {
    const product = productSchema(req.body);


    if (req.files) {
        const filesname = req.files;
        const files = req.files;
        const fileUrls = [];
        files.forEach((file) => {
            const fileUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${file.filename}`;
            const tra = req.protocol;
            fileUrls.push(JSON.stringify(fileUrl));
        });
        product.imgUrls = fileUrls;
        console.log(files);

    }
    product
        .save()
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });


};

const productControllerGet = (req, res) => {
    productSchema.find()
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });;
};

const productControllerPut = (req, res) => {
    const { id } = req.params;
    const { nombre, cantidad, precio, categoria, colores, tallas, descuento, imgUrls } = req.body;

    productSchema.updateOne({ _id: id }, { $set: { nombre, cantidad, precio, categoria, colores, tallas, descuento, imgUrls } })
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });;
};

const productControllerDelete = (req, res) => {
    const { id } = req.params;


    productSchema.findOneAndRemove({ _id: id })
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });;
};


const controllers = { productControllerPost, productControllerGet, productControllerPut, productControllerDelete };



export default controllers;