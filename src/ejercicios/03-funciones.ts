/*Funciones básicas ---------------------------------------------*/

function sumarTs(a: number, b:number): number{
    return a+b;
    //No podemos obligar a la función a devolver un string con .toString() porque ya la definimos como number 
}

function multiplicarTs(num1:number, num2?:number, base:number = 2): number{
    return num1*base;
    // En los parametros primero van los obligatorios, segundo los opciones y tercero los que tienen valores predefinidos
}

const resultadoSumarTs = sumarTs(10,20);
console.log('resultadoSumarTs',resultadoSumarTs);

const resultadoMultiplicarTs = multiplicarTs(5)
console.log('resultadoMultiplicarTs',resultadoMultiplicarTs);
// Como sería una función flecha en Typescript

const  sumarFlechaTs = (a:number,b:number):number => a+b;

/*Funciones con objetos como argumentos ---------------------------------------------*/

interface PersonajeHIMYM{
    nombre: string;
    edad: number;
    envejecer: (a: number) => number;
}

const personajePrincipal: PersonajeHIMYM = {
    nombre: 'Ted Mosby',
    edad: 32,
    envejecer(a){
        return this.edad += a;
    }
}

/*const envejecer = (personajePrincipal: PersonajeHIMYM, anos: number): void =>{
    personajePrincipal.edad += anos;
    console.log(personajePrincipal)
}*/

console.log(personajePrincipal.envejecer(4));
