//Objetos + carrito de compra

//Objetos con id, nombre, precio, cantidades y descrip a traves de Json

const prd = `[

  {   "id": 1,
      "nombre": "Antropometría",
      "precio": 1000,
      "cantidad":1,
      "descripcion": "El cuerpo humano está compuesto por diferentes tejidos: muscular, graso, óseo, residual y piel. La suma de estos engloban el peso de la balanza, lo cual quedarse solo con ese resultado es demasiado simplista. Plantea objetivos nutricionales más específicos conociendo tu composición corporal mediante antropometría."
      
  
  },
  
  {   "id": 2,
      "nombre": "Plan 28 dias",
      "precio": 1500,
      "cantidad":1,
      "descripcion": "La motivación y apoyo son aspectos fundamentales para un cambio de hábitos, frecuentemente nos negamos o abandonamos procesos por falta de estos. Plan 28 días es una propuesta grupal que aborda la alimentación desde un proceso de aprendizaje grupal, acompañados es más fácil y divertido."
      
  
  },
  
  {   "id": 3,
      "nombre": "Plan Personalizado",
      "precio": 2000,
      "cantidad": 1,
      "descripcion": "Mejorar tu salud, aumentar la masa muscular o bajar la masa grasa disfrutando de tú alimentación es posible. Te ayudamos a lograr tus objetivos a través de un plan de alimentación personalizado con recetas, lista de compras, y un seguimiento mes a mes."
      
  
  } 
  
  ] `

  const productos = JSON.parse(prd);
  console.log(typeof jsonPrd)



  //Cards de los productos - las muestro a traves de DOM
  
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
   
    //Evento para el boton de agregar al carrito + sweetalert

    let btncarrito = document.getElementById(`boton${producto.id}`);

    btncarrito.addEventListener("click", function () {
      Swal.fire({
          title: '¿Agregar al carrito?',
          confirmButtonText: 'Agregar',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Producto agregado!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('No enviado', '', 'info')
          }
        });
   })

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });
  
  //Array de carrito por id de producto
  
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
  
  //Resultado del carrito de compras
  
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
  

 
