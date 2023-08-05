const estatusPedido = () => {
  //Define si la promesa tuvo exito o si fracaso
  // Generar numero aleatorio entre 0 y 1, va a ser verdadero 80% de las veces aprocimadamente debido al < 0.8 y 20% aproximadamanete de las veces va a ser falso asi que va a ocurrir un error
  return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido ()) {
      resolve('¡Pedido exitoso! pizza en camino.');
    } else {
      reject('Ocurrió un error. Por favor intente nuevamente');
    }
  }, 3000);
});




// miPedidoDePizza
//   .then((mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
//   })
//   .catch((mensajeDeError) => {
//     console.log(mensajeDeError);
//   })

  // si las funciones son más complejas las puedes definir por separado como hicimos antes y usar .catch
// Esta alternativa normalmente se usa cuando la logica de las funciones es más extensa o complicada y asi las definimos en funciones separadas y solo indicamos un nombre en el manejador

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
}
miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);