
//module built-in significa que ya viene por defecto importado
// console.log('mensaje')
// console.warn('mensaje')
// console.error('error xd')
// console.error(new Error( 'error xd'))

// console.log(process.argv);
//si escribo 'node app.js 6 7' 
//el 6 y el 7 se pasan como argumentos 

//se imprime lo siguiente
/*
'/usr/local/bin/node', - esto indica la ubicacion de node
'/Applications/XAMPP/xamppfiles/htdocs/nodejs_pruebas/app.js', -esto indica la ubicacion de la aplicacion js
'6', -esto son los parametros
'7' -esto son los parametros
  */

for (let i = 2 ; i < process.argv.length ; i++){
    console.log(process.argv[i]);
}