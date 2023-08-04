function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}


// mostrarTema('Node.js');

// setTimeout(mostrarTema, 1000, 'Node.js');


// function sumar(a, b) {
//   console.log(a + b);
// }
// setTimeout(sumar, 2000, 5, 6); 

// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema, 'Node.js');

// console.log('Después de setImmediate()');

setInterval(mostrarTema, 1500, 'Node.js');