const contenido = document.getElementById("principal")

const verCarrito = document.getElementById("verCarrito")

const carrito = []

productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img class= "card-image" src = "${producto.img}">
        <div class = "card-name">${producto.nombre}</h3>
        <div class = "card-desciption">${producto.descripcion}</h3>
        <p class="card-price">${producto.precio} $</p>
    `;
    contenido.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Agregar a 🛒"
    comprar.className = "button"

    content.append(comprar)

    content.addEventListener("click", () =>{
        carrito.push({
            img : producto.img,
            nombre : producto.nombre,
            descripcion : producto.descripcion,
            precio : producto.precio,
        });
        guardarCarrito()
    });
})

const guardarCarrito = () =>{
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

recuperarCarrito()
