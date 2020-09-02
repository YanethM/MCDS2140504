"use strict";
class MarvelClass {
    constructor() {
        this.nombrePersonaje = 'Capitán América';
        this.nombreReal = 'Steven';
        this.usaEscudo = true;
        this.nroBatallas = 100;
    }
}
const superHeroe = new MarvelClass();
superHeroe.nroBatallas = 800;
console.log(superHeroe);
