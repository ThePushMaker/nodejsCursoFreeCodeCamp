const fs = require('fs');

// fs.readFile('./index.html', 'utf-8', (err, contenido) => {
//   if(err){
//     // console.log(err);
//     throw err;
//   } else {
//     console.log(contenido);
//   }
// });

// fs.rename('index.html', 'main.html', (err) => {
//   if(err){
//     throw err;
//   }
//   console.log('Nombre cambiado exitosamente');
// });

// fs.appendFile('./index.html', '<p>Hola</p>', (err) => {
//   if (err){
//     throw err;
//   }
//   console.log("contenido actualizado");
// });

// fs.writeFile('index.html', 'contenido nuevo', (err) => {
//   if (err){
//     throw err;
//   }
//   console.log("contenido reemplazado");
// });

fs.unlink('index copy.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
});