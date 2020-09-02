"use strict";
function resolveAfterTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ejecuto éxitosamente la promesa después de 2 seg');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('Llamando a la función resolveAfterTwoSeconds');
    const activarFuncion = await resolveAfterTwoSeconds();
    console.log(activarFuncion);
}
asyncCall();
console.log('Mensaje después de la función');
