class MarvelClassT{
    constructor(public nombrePersonaje : string, 
                public nombreReal : string,
                public usaEscudo?: boolean,
                public nroBatallas: number = 100){}
}
const superHeroeT = new MarvelClassT('Mujer Maravilla', 'Patricia');
console.log(superHeroeT);