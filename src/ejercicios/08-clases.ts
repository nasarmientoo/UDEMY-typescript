/*class Heroe{
    alterEgo: string;
    edad: number;
    nombreReal: string; 
    constructor( alterEgo: string){
        this.alterEgo = alterEgo
    }
}*/ 

/*Existe una forma más concreta de crear los atributos y constructor de una clase en Ts */

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string,
    ){}
}
class Heroe extends PersonaNormal{
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'Bogotá, Colombia');
    }
}
const ironMan = new Heroe('Iron Man', 53, 'Tony');


/*ironMan.edad = 30 aparece la edad porque es pública, el alterEgo no porque es privada, se puede acceder a ella a través de un constructor*/
console.log(ironMan)