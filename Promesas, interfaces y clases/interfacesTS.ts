interface Marvel {
    nombre: string;
    genero: string;
    nombrepersonaje: string;
    usaEscudo: boolean;
}

const capitanAmerica: Marvel = {
    nombre: 'Steven',
    genero: 'M',
    nombrepersonaje: 'Capitan América',
    usaEscudo: true
}
const capitanAmerica1: Marvel = {
    nombre: 'Steven',
    genero: 'M',
    nombrepersonaje: 'Capitan América',
    usaEscudo: true
}
const capitanAmerica2: Marvel = {
    nombre: 'Steven',
    genero: 'M',
    nombrepersonaje: 'Capitan América',
    usaEscudo: true
}

const guerraInfinito = (personajeMarvel: Marvel)=>{
    console.log(`Nombre del personaje que participo en la guerra ${personajeMarvel.nombrepersonaje}`)
}
guerraInfinito(capitanAmerica);