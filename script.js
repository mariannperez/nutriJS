//Objetos + carrito de compra

//Clase productos con id, nombre, precio, cantidades y descrip.

class Producto {
    constructor(id, nombre, precio, cantidad, descripcion) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.descripcion = descripcion;
    }
  }
  
  //Creación de productos y almacenamiento en el array
  
  const producto1 = new Producto(1, 'Antropometría', 1000, 1, "El cuerpo humano está compuesto por diferentes tejidos: muscular, graso, óseo, residual y piel. La suma de estos engloban el peso de la balanza, lo cual quedarse solo con ese resultado es demasiado simplista. Plantea objetivos nutricionales más específicos conociendo tu composición corporal mediante antropometría.");

  const producto2 = new Producto(2, 'Plan 28 días', 1500, 1, "La motivación y apoyo son aspectos fundamentales para un cambio de hábitos, frecuentemente nos negamos o abandonamos procesos por falta de estos. Plan 28 días es una propuesta grupal que aborda la alimentación desde un proceso de aprendizaje grupal, acompañados es más fácil y divertido.");

  const producto3 = new Producto(3, 'Plan Personalizado', 2000, 1, "Mejorar tu salud, aumentar la masa muscular o bajar la masa grasa disfrutando de tú alimentación es posible. Te ayudamos a lograr tus objetivos a través de un plan de alimentación personalizado con recetas, lista de compras, y un seguimiento mes a mes.");
 
  
  const productos = [producto1, producto2, producto3];

  
  
  //Muestro los productos modificando el DOM.
  
  const contenedorProductos = document.getElementById('contenedorProductos');
  
  productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
                            <div>
                                <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-text"> ${producto.descripcion} </p>
                                    <p class="card-text"> ${producto.precio} </p>
                                    <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(divProducto);
   
    //Evento para el boton de agregar al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });
  
  //Array de carrito que busque por id de producto y lo agregue
  
  const carrito = [];
  
  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };
  
  //Muestro el carrito de compras modificando el DOM.
  
  const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
  let aux = '';
  carrito.forEach((producto) => {
    aux += `
              <div class="card col-xl-3 col-md-6 col-sm-12">
                  <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                  <div class="card-body">
                      <h3 class="card-title"> ${producto.nombre} </h3>
                      <p class="card-text"> ${producto.precio} </p>
                      <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                  </div>
              </div>
              `;
  });

  contenedorCarrito.innerHTML = aux;
  calcularTotalCompra();
}
  
  //Eliminar producto del carrito
  
  const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };
  
  ///Vaciar carrito:
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
  });
  
  //SUma del total del carrito:
  
  const totalCompra = document.getElementById('totalCompra');
  
  const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
  };
  

 
