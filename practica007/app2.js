const express = require('express');
const app = express();

app.get('/data/alumnos', (req, res)=>{
    res.send("Hola");
});

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
});