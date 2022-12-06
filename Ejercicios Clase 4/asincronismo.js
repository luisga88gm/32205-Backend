const temporizador = (callback) => {
    setTimeout(callback, 3000 )

}

const operacion = () => console.log('La operación ha sido realizada');

console.log('Start task!');

temporizador(operacion)

console.log('El nudo del asunto');

console.log('Finished');