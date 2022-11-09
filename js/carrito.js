const carrito = []


const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

const cargarCarrito = () => {
    let tablaBody = ""
    const tbody = document.querySelector("tbody")
          tbody.innerHTML = ""
          carrito.forEach(producto => {
            tablaBody += `<tr>
                            <th class="centrar">${producto.descripcion}</th>
                            <th>${producto.nombre}</th>
                            <th>$ ${producto.precio}</th>
                            <th>Un pago</th>
                            <th><button id="${producto.nombre}" class="button-delete button-small">QUITAR</button></th>
                        </tr>`
          })
          tbody.innerHTML = tablaBody
    let totalCarrito = carrito.reduce((acc, item)=> acc + item.precio, 0 )
        tbody.innerHTML += `<tr>
                                <th></th>
                                <th>TOTAL</th>
                                <th>$ ${totalCarrito.toFixed(2)}</th>
                            </tr>`
        activoBotonesParaQuitar()
}

const activoBotonesParaQuitar = ()=> {
    const botonQuitar = document.querySelectorAll(".button-delete.button-small")
          botonQuitar.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let aEliminar = carrito.findIndex(producto => producto.nombre === e.target.id) 
                    carrito.splice(aEliminar, 1)
                    localStorage.setItem("carrito", JSON.stringify(carrito))  
                    cargarCarrito()  
            })
          })
}

const alerta = (titulo, textoBoton)=> {
    return Swal.fire({title: titulo, confirmButtonText: textoBoton})
}

const carritoVacio = ()=> {
      alerta("No has agregado elementos en el carrito", "Volver")
}

const finalizarCompra = ()=> {
    alerta('Gracias por su compra, vuelva pronto', 'Confirmar').then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = 'index.html'
        }
    })
}

btnComprar.addEventListener("click", ()=> carrito.length === 0 ? carritoVacio() : finalizarCompra() )

recuperarCarrito()
carrito.length > 0 && cargarCarrito()
