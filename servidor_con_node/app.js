const http = require('http');
/*
  constante para almacenar ese servidor. Cada vez que reciba una solicitud va a ejecutar la función que le pacemos a createServer() como argumento
  req = representa solicitud
   res = representa respuesta 
*/
const servidor = http.createServer((req, res) => {
  // proceso

  // res permite enviar el resultado que queremos enviarle al cliente
  res.end('Hola mundo');
});