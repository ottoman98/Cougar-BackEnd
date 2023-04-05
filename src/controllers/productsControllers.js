import productSchema from "../models/productSchema.js";


const productControllerPost = (req, res) => {


    let colores = req.body.colores.split(",");


    let tallas = req.body.tallas.split(",");

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
};


const productControllerGet = (req, res) => {

    productSchema.find()
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });;
};





const productControllerPut = (req, res) => {

    const { id } = req.params;

    const product = new productSchema({
        _id: id,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        categoria: req.body.categoria,
        colores: req.body.colores,
        tallas: req.body.tallas,
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

    const update = { $set: product };
    const options = { new: true };

    productSchema
        .findByIdAndUpdate(id, update, options)
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};



const productControllerDelete = (req, res) => {
    const { id } = req.params;


    productSchema.findOneAndRemove({ _id: id })
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });;

};

const productControllerGetById = (req, res) => {

    const { id } = req.params;

    productSchema.findById(id)
        .then((data) => { res.json(data); })
        .catch((e) => { res.json({ error: e }); });
};





const controllers = { productControllerPost, productControllerGet, productControllerPut, productControllerDelete, productControllerGetById, productControllerGetById };



export default controllers;