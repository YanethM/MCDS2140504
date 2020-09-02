/* Estructura:
new Promise(resolve(caso éxitoso),reject(rechazo)) */
const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('Promesa se ejecuto de forma éxitosa')
    ,1000);
});
promesa.then(mensaje => console.log(mensaje));



const promesaRechazada = new Promise((resolve,reject)=>{
    setTimeout(()=> reject('Error promesa rechazada')
    ,1000);
});
promesaRechazada.catch(err => console.warn(err));


/* EJEMPLO */
const retirarDineroCajero = (montoRetirar: number)=>{
    let saldoActual = 1000000;
    return new Promise((resolve,reject) =>{
        if(montoRetirar > saldoActual)
            reject('Fondos insuficientes');
        else{
            saldoActual -= montoRetirar;
            resolve(saldoActual);
        }
    });
}
retirarDineroCajero(600000)
    .then(montoActual => console.log(`El saldo disponible es ${montoActual} COL`))
    .catch(console.warn);


const retiroCajeroOperTernario = (montoRetirar: number): Promise<number> =>{
    let saldoActual = 1000000;
    let montoRestante = saldoActual - montoRetirar;
    return new Promise((resolve,reject) =>{
        /* (condicion)? true : false */
        (montoRetirar > saldoActual) ? reject('Fondos insuficientes, no puede retirar') : resolve(montoRestante);
    });
}
retiroCajeroOperTernario(1200000)
    .then(montoActual => console.log(`El saldo disponible es ${montoActual} COL`))
    .catch(console.warn);

