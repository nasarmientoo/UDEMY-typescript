
/*Agregar los decoradores experimentales en el tsconfig.json */
const reportableClassDecorator = <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
    reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';
    imprimir(){
        console.log('Hola Mundo')
    }
}

let superClase = new MiSuperClase();
superClase.imprimir();

console.log(MiSuperClase)
