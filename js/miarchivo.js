const contenido = document.getElementById("principal")

const verCarrito = document.getElementById("verCarrito")

const carrito = []
let productos = []

const toast = ()=> {
    Toastify({
        text: 'Elemento agregado al carrito',
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right", 
        style: {
          background: "#9b4dca",
          width: "275px",
        }
      }).showToast();
}

const cargarMisProductos = async ()=>{
    try {
        const response = await fetch("../bbdd/productos.json")
        productos = await response.json()
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
                guardaCarrito()
                toast()
            });
    })
    } catch (error) {
        swal({
            title: "Hubo un error cargando los productos",
            text: "Cargue nuevamente la página o espere a que el equipo lo solucione",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
    }
}

const guardaCarrito = () =>{
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
            carritoGuardado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No existe carrito guardado anteriormente.")
    }
}

recuperarCarrito()
cargarMisProductos()