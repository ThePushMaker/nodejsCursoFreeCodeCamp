// creas la promesa dentro de la función y la retornas, asi tu programa puede esperar que esta promesa se complete al momento de lllamar a esta funcion
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenado: ${producto} de freeCodeCamp.`);
    setTimeout( () => {
      if(producto === 'taza'){
        resolve('Ordenando una taza con el logo de freeCodeCamp...');
      } else {
        reject('Este producto no está disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise(resolve => {
    console.log('procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}" `);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  });
}

// para garantizar que estas dos operaciones asincronas se realicen en el orden correcto, por ejemplo primero ordenar el producto y luego procesar pedido, se utiliza lo que se conoce como encadenar promesas

// ordenarProducto('taza')
//   .then(respuesta => {
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   }) 
//   .then(respuestaProcesada => {
//     console.log(respuestaProcesada);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// async es una abreviatura de la palabra en inglés asynchronous que significa asincrono
// esto le va a decir a javascript que nuestra funcion tiene codigo asincrono, asi que en realidad esta funcion va a retornar una promesa. Todas las funciones con async retornan una promesa
// la palabra clave await va a permitir que esperemos a que este proceso asincrono se complete antes de completar la ejecución de la funcion, y siempre se usa junto con async, await no se pude usar en una función que no sea asincrona
//sin await esto no va a funcionar correctamente, pero si colocamos await antes de los procesos asincronos, le estamos diciendo a nuestro codigo que espere a que este proceso se complete y la promesa se cumpla o se rechace antes de continuar la ejecución de la funcion. Asi que podemos leer el codigo como su fuera sincrono

// y para detectar cualquier error podemos usar try y catch. Escribir try y luego entre llaves escribir todo el codigo que podria generar un error. Luego en catch puedes escribir el error y manejarlo como lo necesites, en este caso lo vamos a mostrar

async function realizarPedido (producto) {
  try{
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('lapiz'); 