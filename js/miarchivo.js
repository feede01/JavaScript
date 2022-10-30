class Usuario {
    constructor (nombreYApellido, compras){
        this.nombreYApellido = nombreYApellido
        this.compras = compras;
    }
}

const eligeNotebook = () => {
    return [
        prompt("Elija entre los 3 modelos disponibles: (A/B/C)").toUpperCase(),
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
                Swal.fire({
                    title: 'No es posible hacerlo en esas cuotas.',
                });
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
                Swal.fire({
                    title: 'No es posible hacerlo en esas cuotas.',
                });
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
                Swal.fire({
                    title: 'No es posible hacerlo en esas cuotas.',
                });
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
localStorage.clear();
let boton = document.getElementById("boton-1");
boton.addEventListener("click",() =>{
    Swal.fire({
        title: 'Le damos la bienvenida a TecnologíasCoder, haga click en Comprar para proceder',
        icon: 'success',
    })
});
let boton2 = document.getElementById("boton-2");
boton2.addEventListener("click",() =>{
    let respuesta;
    Swal.fire({
        title: '¿Desea iniciar sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed){
            respuesta = result.isConfirmed;
            console.log('respuesta',respuesta)
        }
        if (result.isDismissed){
            respuesta = result.isDismissed;
            alert("Vuelva pronto")
        }
        while (respuesta){
        let ayuda = 0;
        let nombreYApellido = prompt("Ingrese su nombre y apellido:")
        let usuarioActual = new Usuario(nombreYApellido, []);
        alert("Bienvenido a TecnologíaCoder "+ nombreYApellido)
        alert("Los 3 modelos son:\n Modelo A: ALTA GAMA $100.000 \n Modelo B: MEDIA GAMA $85.000 \n Modelo C: BAJA GAMA $75.000")
        let respuesta2 = confirm("¿Necesita ayuda con una notebook? ")
        while (respuesta2){
            ayuda += 1;
            let [modelo, cantCuotas] = eligeNotebook();
            usuarioActual.compras.push(new Compra(
                modelo,
                cantCuotas
            ));
            alert(`Detalles de la compra: \nNOTEBOOK \nMODELO: ${modelo} \nCUOTAS: ${cantCuotas} \nCADA CUOTA ES: ${precioFinal(modelo,cantCuotas)} \nPRECIO FINAL: ${cantCuotas * precioFinal(modelo,cantCuotas).toFixed(2)}`);
            respuesta2 = confirm("¿Necesita ayuda con una notebook? ")
        }
        clientes.push(usuarioActual)
        const usuariosGuardados = localSotrage.getItem("usuariosGuardados");
        let matrizUsuarios = [];
        if (usuariosGuardados !== null){
            matrizUsuarios = JSON.parse(usuariosGuardados);
        }
        matrizUsuarios.push(usuarioActual);
        localStorage.setItem("usuariosGuardados", JSON.stringify(matrizUsuarios));
        if (respuesta2){ // NO ME SALE ESTE ALERTA TANTO PARA EL CANCELAR COMO PARA EL CONFIRMAR SI QUIERO UNA NOTEBOOK
            Swal.fire({
                title: 'Gracias por comprar en TecnologíaCoder' + nombreYApellido + ", vuelva pronto.",
            });
        } else if((!respuesta2) && (ayuda > 0)){
            Swal.fire({
                title: 'Gracias por comprar en TecnologíaCoder' + nombreYApellido + ", vuelva pronto.",
            });
        } else {
            Swal.fire({
                title: 'Esperemos que la próxima podamos ayudarlo ' + nombreYApellido + ", vuelva pronto.",
            });
        }
    }
    })
})
