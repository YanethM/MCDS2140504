"use strict";
/* SetTimeOut y SetInterval
setTimeOut(function, tiempo milisegundos) */
let funcionAnonima = function () { }; /* Estructura de una función anónima */
const funcionFlecha = () => { }; /* Estructura función flecha */
/*
setTimeout(function(){
    alert('Bienvenido a clase');
},3000);

setTimeout(function(){ alert('Typescript');},4000);

setTimeout(() => { alert('En espera');},5000);
setTimeout(() => alert('En espera sin llaves'),3000); */
function mensajeMostrar() {
    alert('Estaba esperando que me activarás');
}
/* La hora actual */
function setIntervalE() {
    let horaActual = new Date();
    console.log(horaActual.toLocaleTimeString());
}
