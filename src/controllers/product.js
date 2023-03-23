import productSchema from "../models/productSchema.js";


const productcontroller = (req, res) => {
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


    }
    product
        .save()
        .then((data) => { res.send(data); })
        .catch((e) => { res.json({ error: e }); });


};

export default productcontroller;