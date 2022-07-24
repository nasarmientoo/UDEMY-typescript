/*function queTipoSoy<T>(argumento: T): T{
    console.log(typeof argumento);
    return argumento;
}*/

const queTipoSoy = <T>(arg: T): T=> arg


let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy<number[]>([1,2,3])