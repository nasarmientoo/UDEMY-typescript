import { calcularISV, Producto } from "./06-desestructuracion-arg";
/*Al importar calcularISV el archivo se ejecuta y por eso sale en consola el console.log de ambos archivos, con la excepeción de las interfaces */

const carritoCompras: Producto[] = [
    {
        desc: 'IPhone 13 Pro',
        precio: 10
    },
    {
        desc: 'IPhone 11',
        precio: 20
    }
];

const[total, isv] = calcularISV(carritoCompras);
console.log(total, isv);

