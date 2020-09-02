class MarvelClass{
    nombrePersonaje: string = 'Capitán América';
    nombreReal: string = 'Steven';
    usaEscudo: boolean = true;
    nroBatallas: number = 100;
}

const superHeroe = new MarvelClass();
superHeroe.nroBatallas = 800;
console.log(superHeroe);