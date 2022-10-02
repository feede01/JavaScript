let precio
function precioFinal(precio, cantCuotas){
    return precio/cantCuotas
}
let ayuda = 0;
let nombreYApellido = prompt("Ingrese su nombre y apellido:")
alert("Bienvenido a TecnologíaCoder "+ nombreYApellido)
let respuesta = prompt("¿Necesita ayuda con una notebook? (SI/NO)")
while (respuesta == "SI"){
    ayuda += 1;
    let modelo = prompt("Elija entre los 3 modelos disponibles: (A/B/C)")
    if (modelo == "A"){
        alert("El modelo A vale $100.000")
        precio = 100000;
    } else if (modelo == "B"){
        alert("El modelo B vale $85.000")
        precio = 85000;
    } else if (modelo == "C"){
        alert ("El modelo C vale $75.000")
        precio = 75000;
    } else {
        alert ("No contamos con ese modelo en este momento.")
    }
    let respCuotas = prompt("¿Desea pagarla en cuotas sin interés? (SI/NO)")
    if (respCuotas == "SI") {
        let cantCuotas = prompt("Elegí la cantidad de cuotas: (3/6/9/12)")
        if (modelo == "A"){
            switch(cantCuotas){
                case "3":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "6":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "9":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "12":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                default:
                    alert("No es posible hacerlo en esas cuotas.")
            }
        } else if(modelo == "B"){
            switch(cantCuotas){
                case "3":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "6":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "9":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "12":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                default:
                    alert("No es posible hacerlo en esas cuotas.")
            }
        } else if(modelo == "C"){
            switch(cantCuotas){
                case "3":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "6":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "9":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                case "12":
                    alert("El precio de cada cuota sería de: $" + precioFinal(precio,cantCuotas).toFixed(2))
                    break;
                default:
                    alert("No es posible hacerlo en esas cuotas.")
            }
        }
    } else {
        alert("Paga todo en un solo pago.")
    }
    respuesta = prompt("¿Necesita ayuda con otra notebook? (SI/NO)")
}
if (respuesta == "SI"){
    alert("Gracias por comprar en TecnologíaCoder " + nombreYApellido + ", vuelva pronto.")
} else if((respuesta == "NO") && (ayuda > 0)){
    alert("Gracias por comprar en TecnologíaCoder " + nombreYApellido + ", vuelva pronto.")
} else {
    alert ("Esperemos que la próxima podamos ayudarlo " + nombreYApellido + ", vuelva pronto.")
}
