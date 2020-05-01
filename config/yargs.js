//optimizacion de yargs para comando base y limite
let opc = {
    base: {
        demand: true,
        alias: 'b',

    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opc)
    .help().argv;
/*Código de yargs no optimizado
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',

        },
        limite: {
            alias: 'l',
            default: 10
        }

    })
    .command('crear', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',

        },
        limite: {
            alias: 'l',
            default: 10
        }

    }).help().argv; 
*/
module.exports = {
    argv
}