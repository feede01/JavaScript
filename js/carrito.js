const carrito = []

const loader = () => `<img src="imagenes/loading.gif" alt="Cargando" width="35px">`

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || []
            carritoGuardado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No existe carrito guardado anteriormente.")
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
                <th><input type="number" id="cuotas" value="0" min="0" max="18" step="3"></th>
                <th><button id="${producto.nombre}" class="button-delete button-small">QUITAR</button></th>
            </tr>`
    })
    tbody.innerHTML = tablaBody
    let sumaTotal = carrito.reduce((acc, producto)=> acc + producto.precio, 0 )
    tbody.innerHTML += `<tr>
        <th></th>
        <th>TOTAL</th>
        <th>$ ${sumaTotal.toFixed(2)}</th>
    </tr>`
    activoBotonesParaQuitar()
}

const activoBotonesParaQuitar = ()=> {
    const botonQuitar = document.querySelectorAll(".button-delete.button-small")
    botonQuitar.forEach(btn => {
        btn.addEventListener("click", (e)=> {
            let Elimina = carrito.findIndex(producto => producto.nombre === e.target.id) 
            carrito.splice(Elimina, 1)
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
    btnComprar.innerHTML = loader()
    setTimeout(() => {
    alerta('Gracias por su compra, vuelva pronto', 'Confirmar')
    .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = 'index.html'
        }
    })
    }, 2500);
}



btnComprar.addEventListener("click", ()=> carrito.length === 0 ? carritoVacio() : finalizarCompra() )

recuperarCarrito()
carrito.length > 0 && cargarCarrito()
