/*Desesctructuración de argumentos --------------------------------------- */

export interface Producto {
    desc: string;
    precio: number;
}

const telefono:Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto ={
    desc: 'Ipad Air',
    precio: 350
}

export const calcularISV = (productos: Producto[]): [number, number] =>{
    let total = 0;
    /* productos.forEach((producto) =>{
        total += producto.precio;
    }) */
    productos.forEach(({precio}) =>{
        total += precio;
    })
    return [total, total * 0.15];
}

/* const articulos = [telefono, tableta];
const [total, totalISV] = calcularISV(articulos);
console.log(total, totalISV) */