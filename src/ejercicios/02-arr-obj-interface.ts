let valoracion: (string|number|boolean)[] = ['Excelente',100,5, true, 'Desaprobado', false];
let habilidades: string[] = ['Saltar', 'Golpear', 'Sanacion']

interface Personaje {
    nombre: String;
    edad: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje ={
    nombre: 'Daniel',
    edad: 25,
    habilidades: ['Saltar', 'Golpear', 'Sanacion'],
}

personaje.puebloNatal = 'Bogotá D.C.';

console.table( personaje );