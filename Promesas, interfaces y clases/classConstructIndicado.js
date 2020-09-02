"use strict";
class MarvelClassT {
    constructor(nombrePersonaje, nombreReal, usaEscudo, nroBatallas = 100) {
        this.nombrePersonaje = nombrePersonaje;
        this.nombreReal = nombreReal;
        this.usaEscudo = usaEscudo;
        this.nroBatallas = nroBatallas;
    }
}
const superHeroeT = new MarvelClassT('Mujer Maravilla', 'Patricia');
console.log(superHeroeT);
