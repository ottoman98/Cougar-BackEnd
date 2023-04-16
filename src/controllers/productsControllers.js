import productSchema from "../models/productSchema.js";


const productControllerGet = (req, res) => {

    productSchema.find()
        .then((data) => { res.send(data); })
        .catch((e) => { res.json({ error: e }); });;
};



const productControllerPost = (req, res) => {

    const camposObligatorios = ['nombre', 'cantidad', 'precio', 'categoria', 'colores', 'tallas', 'genero'];


    for (const campo of camposObligatorios) {
        if (!req.body[campo] || req.body[campo].length === 0) {
            return res.status(400).json({ error: `El campo ${campo} es obligatorio` });
        }
    }



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
        descripcion: req.body.descripcion,
        imgUrls: req.body.imgUrls,
        genero: req.body.genero

    });


    if (req.files) {
        const files = req.files;
        const fileUrls = [];
        files.forEach((file) => {
            const fileUrl = `https://sport-elite-back.onrender.com/imgs/${file.filename}`;

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
        descripcion: req.body.descripcion,
        imgUrls: req.body.imgUrls,
        genero: req.body.genero
    });


    let oldData;


    function arraysValiadations() {
        if (req.body.colores == undefined) {
            product.colores = oldData.colores;
        }
        if (req.body.tallas == undefined) {
            product.tallas = oldData.tallas;
        }
        if (req.files.length == 0) {
            product.imgUrls = oldData.imgUrls;
        }

        if (req.files.length != 0) {
            const files = req.files;
            const fileUrls = [];
            files.forEach((file) => {
                const fileUrl = `https://sport-elite-back.onrender.com/imgs/${file.filename}`;

                fileUrls.push(fileUrl);
            });
            product.imgUrls = fileUrls;
        }



    }



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
        .findById(id)
        .then((oldProduct) => {
            oldData = oldProduct;
            arraysValiadations();
            return productSchema.findByIdAndUpdate(id, update, options);
        })
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



const controllers = { productControllerPost, productControllerGet, productControllerPut, productControllerDelete };



export default controllers;