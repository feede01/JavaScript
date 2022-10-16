class Usuario {
    constructor (nombreYApellido, compras){
        this.nombreYApellido = nombreYApellido
        this.compras = compras;
    }
}

const eligeNotebook = () => {
    return [
        prompt("Elija entre los 3 modelos disponibles: (A/B/C)"),
        parseInt(prompt("Ingrese la cantidad de cuotas a pagar"))
    ];
}


let precio
const precioFinal = (modelo, cantCuotas) => {
    let precioTotal
    if (modelo == "A"){
        precio = 100000;
    } else if (modelo == "B"){
        precio = 85000;
    } else if (modelo == "C"){
        precio = 75000;
    }
    if (modelo == "A"){
        switch(cantCuotas){
            case 3:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 6:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 9:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 12:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            default:
                alert("No es posible hacerlo en esas cuotas.")
        }
    } else if(modelo == "B"){
        switch(cantCuotas){
            case 3:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 6:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 9:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 12:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            default:
                alert("No es posible hacerlo en esas cuotas.")
        }
    } else if(modelo == "C"){
        switch(cantCuotas){
            case 3:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 6:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 9:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            case 12:
                precioTotal = precio/cantCuotas.toFixed(2)
                break;
            default:
                alert("No es posible hacerlo en esas cuotas.")
        }
    }
    return precioTotal
} 

class Compra {
    constructor(modelo, cantCuotas){
        this.modelo = modelo;
        this.cantCuotas = cantCuotas;
        this.precioCompra = precioFinal(modelo,cantCuotas);
    }
}


let clientes= [];
let ayuda = 0;
let nombreYApellido = prompt("Ingrese su nombre y apellido:")
let usuarioActual = new Usuario(nombreYApellido, []);
alert("Bienvenido a TecnologíaCoder "+ nombreYApellido)
alert("Los 3 modelos son:\n Modelo A: ALTA GAMA $100.000 \n Modelo B: MEDIA GAMA $85.000 \n Modelo C: BAJA GAMA $75.000")
let respuesta = confirm("¿Necesita ayuda con una notebook? ")
while (respuesta){
    ayuda += 1;
    let [modelo, cantCuotas] = eligeNotebook();
    usuarioActual.compras.push(new Compra(
        modelo,
        cantCuotas
    ));
    alert(`Detalles de la compra: \nNOTEBOOK \nMODELO: ${modelo} \nCUOTAS: ${cantCuotas} \nCADA CUOTA ES: ${precioFinal(modelo,cantCuotas)} \nPRECIO FINAL: ${cantCuotas * precioFinal(modelo,cantCuotas).toFixed(2)}`);
    respuesta = confirm("¿Necesita ayuda con una notebook? ")
}
clientes.push(usuarioActual)
if (respuesta){
    alert("Gracias por comprar en TecnologíaCoder " + nombreYApellido + ", vuelva pronto.")
} else if((!respuesta) && (ayuda > 0)){
    alert("Gracias por comprar en TecnologíaCoder " + nombreYApellido + ", vuelva pronto.")
} else {
    alert ("Esperemos que la próxima podamos ayudarlo " + nombreYApellido + ", vuelva pronto.")
}
