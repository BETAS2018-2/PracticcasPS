const fs = require("fs");
const colors = require('colors');

let crear = data =>{
    fs.writeFile('data.json', JSON.stringify (data, undefined, 2), (err)=>{
        if(err) {
            console.log(err.red);
        } else { 
            console.log("El archivo fue creado".green);
        }
    });
}

let cargarArchivo = () =>{
    try{
        return require('./data.json');
    } catch(err) {
        return {alumnos: []};
    }
}

let agregarAlumno = (alumno) =>{
    let archivo = cargarArchivo();
    archivo.alumnos.push(alumno);
    crear(archivo);
    console.log(`se ha agregado el alumno ${alumno}`.yellow);
}

module.exports = {
    crear,
    agregarAlumno
}