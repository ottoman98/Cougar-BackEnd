import productSchema from "../models/productSchema.js";


const productControllerPost = (req, res) => {
    const colores = req.body.colores.split(",");
    const tallas = req.body.tallas.split(",");

    const product = new productSchema({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        categoria: req.body.categoria,
        colores: colores,
        tallas: tallas,
        descuento: req.body.descuento,
        imgUrls: req.body.imgUrls
    });

    if (req.files) {
        const files = req.files;
        const fileUrls = [];
        files.forEach((file) => {
            const fileUrl = `${req.protocol}://${req.hostname}/imgs/${file.filename}`;

            fileUrls.push(fileUrl);
        });
        product.imgUrls = fileUrls;
    }

    product
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            res.json({ error: e });
        });
    console.log(product);

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
    const productId = req.params.id; // obtener el ID del producto a actualizar
    const updatedProduct = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        categoria: req.body.categoria,
        colores: req.body.colores.split(","),
        tallas: req.body.tallas.split(","),
        descuento: req.body.descuento,
        imgUrls: req.body.imgUrls
    };

    if (req.files) {
        const files = req.files;
        const fileUrls = [];
        files.forEach((file) => {
            const fileUrl = `${req.protocol}://${req.hostname}/imgs/${file.filename}`;
            fileUrls.push(fileUrl);
        });
        updatedProduct.imgUrls = fileUrls;
    }

    // Buscar el producto existente y actualizarlo
    productSchema
        .findOneAndUpdate({ _id: productId }, updatedProduct, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            res.json({ error: e });
        });
};











const controllers = { productControllerPost, productControllerGet, productControllerPut, productControllerDelete };



export default controllers;