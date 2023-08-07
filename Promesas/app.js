    const promesaCumplida = true;
    
    // creamos una promesa y la asignamos a una constante
    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(promesaCumplida){
          // con resolve podemos enviar una cadena de caracteres, algun valor o cualquier cosa que necesitemos para manejar ese exito de la promesa.
          resolve('¡Promesa cumplida!');
        } else {
          // Rechazamos la promesa y explicamos porque o que sucedió
          reject('Promesa rechazada');
        }
      }, 3000);
    });

  
    const manejarPromesaCumplida = (valor) => {
      console.log(valor);
    }
    
    const manejarPromesaRechazada = (razonRechazo) => {
      console.log(razonRechazo);
    }

    miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
