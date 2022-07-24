
interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Nataly'
}

const pasajero2: Pasajero = {
    nombre: 'José',
    hijos: ['Paula', 'Nicolas']
}

const imprimirHijos = (pasajero: Pasajero): void => {
    const cantidadHijos = pasajero.hijos?.length || 0;
    console.log(cantidadHijos);
}

imprimirHijos(pasajero1);