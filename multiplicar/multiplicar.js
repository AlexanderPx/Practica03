//Código para requerir el paquete para gestionar archivos
const fs = require('fs');
let data = '';
//Código para requerir el paquete para gestionar colores en el terminal
const colors = require('colors');
/*
fs.writeFile(`tablas/tabla-${base}.txt`, data,{flag:'a'}, (err) => {
    if (err) throw err;
    console.log(`El archivo de la tabla ${base} ha sido guardada!`);
});
*/

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject(`El valor de la base ${base} no es válido`);
        return
    }
    //agregar color a la salida o impresión en el terminal
    console.log("=====================".green);
    console.log(`TABLA DE MULTIPLICAR ${base} `.green);
    console.log("=====================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }

}


let crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {
            //validar que la base sea un número
            if (!Number(base)) {
                reject(`El valor de la base ${base} no es válido`);
                return
            }
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base * i}\n`;
            }
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`El archivo de la tabla ${base} al ${limite} ha sido guardada!`);
            });
        })
    }
    //código para exportar paquetes
module.exports = {
    crearArchivo,
    listarTabla
}