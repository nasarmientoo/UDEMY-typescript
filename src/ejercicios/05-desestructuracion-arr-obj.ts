/*Desectructuración de objetos -------------------------------------- */
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 30,
    cancion: 'Te felicito',
    detalles:{
        autor: 'Shakira',
        anio: 2022
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

/*console.log('El volumen actual es, ', reproductor.volumen)
console.log('El segundo actual es, ', reproductor.segundo)
console.log('La cancion actual es, ', reproductor.cancion)
console.log('El autor es, ', reproductor.detalles.autor)
console.log('El año es, ', reproductor.detalles.anio)*/

console.log('El volumen actual es, ', volumen)
console.log('El segundo actual es, ', segundo)
console.log('La cancion actual es, ', cancion)
console.log('El autor es, ', autor)
console.log('El año es, ', anio)

/*Desectructuración de arreglos -------------------------------------- */

const dbz: string[] = ['Goku', 'Vegetta', 'Trunks']
const[,,p3] = dbz

/*console.log('Personaje 1: ', dbz[0])
console.log('Personaje 2: ', dbz[1])*/
console.log('Personaje 3: ', p3)

