import express from "express";
import controllers from "../../controllers/productsControllers.js";
import upload from "../../services/multer.js";


const routerV1 = express.Router();

routerV1
    .get('/', controllers.productControllerGet)
    .get('/:id', controllers.productControllerGetById)
    .post('/', upload, controllers.productControllerPost)
    .put("/:id", upload, controllers.productControllerPut)
    .delete("/:id", controllers.productControllerDelete);


export default routerV1; 