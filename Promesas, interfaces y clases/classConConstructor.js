"use strict";
class MarvelClassC {
    constructor(nombrePersonaje, nombreReal) {
        this.usaEscudo = true;
        this.nroBatallas = 800;
        this.nombrePersonaje = nombrePersonaje;
        this.nombreReal = nombreReal;
    }
}
const superHeroeD = new MarvelClassC('Capi América', 'Steven');
console.log(superHeroeD);
