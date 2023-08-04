function saludar(name){
  return `Hola, ${name}`;
}

function holaMundo(){
  return 'Hola mundo';
}

//exportar modulos
// primero el nombre que le queremos asignar a la propiedad = luego el nombre que lo asocia con la definicion de la funcion. Se puede asignar cualquier otro nombre la principio, pero es util y preferible asignarle el nombre de la funcion con la cual se va a importar, o sea que tengan el mismo, pero cual decidir usar es preferencia personal o segun lo que decidan usar si es que estas trabajando en equipo

// module.exports.saludar = saludar;
// module.exports.holaMundo = holaMundo;

//forma alternativa de exportar modulos mucho más eficiente
console.log(module.exports);
module.exports = {
  saludar: saludar,
  holaMundo: holaMundo
};
console.log(module.exports);