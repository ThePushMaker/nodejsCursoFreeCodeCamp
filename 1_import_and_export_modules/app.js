
//cuando se importa un modulo es una convención utilizar el nombre del mismo modulo que se está importando
//cuando se trabaja con require se utiliza el termino incluir en lugar de importar para evitar una confusión con otro tipo de importación que si usa la palabras import que se usa para otro tipo de modulpo
// ./ al comienzo es la forma de indicar que el modulo está ubicado en la misma carpeta
// const saludos = require('./saludos.js');



// console.log(saludos.saludar('pepe'));

// console.log(saludos.holaMundo());

//es recomendable ser consistente y usar un mismo tipo de comillas durante todo el programa, sea comillas simples o dobles 


//para importar solo ciertos elementos del modulo y no todo el archivo se utiliza algo llamado sintaxis de destructuración

const { saludar, holaMundo } = require('./saludos.js');

console.log(holaMundo());