import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', () => {
    res.send('SportElite');
});


app.listen(PORT, () => {
    console.log('😎 Corriendo');
});