import mongoose from "mongoose";


const dbName = 'SportElite';
const password = '1234';





const url = `mongodb+srv://osmanzxc:${password}@pcweb.xme2x4e.mongodb.net/${dbName}`;

const mongoConnection = mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.error('Error al conectarse a la base de datos:', err));


export default mongoConnection



