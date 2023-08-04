//se importa el modulo events
const EventEmitter = require('events');

// se crea la constante para crear nuestro emisor de eventos, creamos una nueva de la instancia EventEmitter, un nuevo objeto que nos va a permitir emitir eventos
const emisorProductos = new EventEmitter();

// Cuando ocurra el evento con este nombre, el evento compra, Vamos a definir esta funcion para manejar ese evento. En este caso es una función flecha, podria ser tambien el nombre de la función que quieres que maneje ese evento cuando ocurra
// basicamente lo que estamos diciendo es cuando ocurra ese evento, el evento compra, esto es lo que debes de hacer

emisorProductos.on('compra', (total, numProductos) => {
  console.log(`Total de la compra: $${total}.`);
  console.log(`Numero de productos: $${numProductos}.`);
}); 

// una vez que ya hicimos esa asociacion en el emisor, también podemos en nuestra app, donde lo necesitemos, emitir ese evento usando el metodo 'emit'. Quiero emitir un evento llamado compra
// Nuestro programa va a buscar en el emisor cual es la función asociada a ese evento, la que asociamos antes con el metodo 'on'
emisorProductos.emit('compra', 500, 5);

