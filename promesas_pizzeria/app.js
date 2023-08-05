const estatusPedido = () => {
  //Define si la promesa tuvo exito o si fracaso
  // Generar numero aleatorio entre 0 y 1
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
}

for(let i = 0; i < 10; i++) {
  console.log(estatusPedido());
}