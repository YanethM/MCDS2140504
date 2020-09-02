class MarvelClassC{
    nombrePersonaje: string;
    nombreReal: string;
    usaEscudo: boolean = true;
    nroBatallas: number = 800;

    constructor(    nombrePersonaje : string, 
                    nombreReal : string )
    {
        this.nombrePersonaje = nombrePersonaje;
        this.nombreReal = nombreReal;
    }
}

const superHeroeD = new MarvelClassC('Capi América', 'Steven');
console.log(superHeroeD);
