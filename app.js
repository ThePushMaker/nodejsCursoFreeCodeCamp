//el modulo timers contiene funciones que ejecutan codigo luego de un cierto periodo de tiempo
//1 segundo es equivalente a 1000 milisegundos

//setTimeout(funcion, retraso, argumento1, arguemento2);

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

function sumar(a, b){
    console.log(a+b);
}

//retrasa la ejecución 1 segundo
// setTimeout(mostrarTema, 1000, 'Node.js');

// setTimeout(sumar, 2000, 5, 6);


//setImmediate()
//para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos (lo más pronto posible)

//setImmediate(function, argumento1, argumento2);

//la función se va a ejecutar después del codigo sincrono 

// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema, 'Node.js');

// console.log('Después de setImmediate()');
