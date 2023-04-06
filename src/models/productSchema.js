import mongoose from "mongoose";

const productSchemaModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    colores: {
        type: [String],
        required: true
    },
    tallas: {
        type: [String],
        required: true
    },
    descuento: {
        type: Number,

    },
    descripcion: {
        type: String,

    },

    imgUrls: {
        type: [String],


    },
    genero: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }

});

productSchemaModel.methods.setImageUrl = function setImageUrl(filename) {

    const host = process.env.APP_HOST;
    const port = process.env.PORT;
    this.imgUrls = filename;


};
const productSchema = mongoose.model('Product', productSchemaModel);
export default productSchema;