 //DOM Y EVENTO aplicados a página de formulario

 const form = document.querySelector("#formulario")
 const nombre = document.querySelector("#nombre");
 const edad = document.querySelector("#edad");
 const mail = document.querySelector("#mail");
 const mensaje = document.querySelector("#mensaje");
 //DOM
 formulario.addEventListener("submit", validarFormulario);
 function validarFormulario(e) {
     e.preventDefault();
     console.log(`name: ${nombre.value}`);
     console.log(`edad: ${edad.value}`);
     console.log(`mail: ${mail.value}`);
     console.log(`mensaje: ${mensaje.value}`);}
 

 
 //Storage
 
 
 // El usuario completa un campo y va pasando al siguiente con focusout. Luego llamamos a la función ls donde la key sera igual que el elemento que queremos guardar por ej "nombre", y el otro valor es el elemento y su valor ej nombre.value para que nos arroje el valor del elemento cargado en ese form.
 
 
 
 
 nombre.addEventListener("focusout", function(){
     localStorage.setItem("name", nombre.value);
 })
 
 
 edad.addEventListener("focusout", function(){
     localStorage.setItem("edad", edad.value);
 })
 
 
 mail.addEventListener("focusout", function(){
     localStorage.setItem("mail", mail.value);
 })
 
 
 mensaje.addEventListener("focusout", function(){
     localStorage.setItem("mensaje", mensaje.value);
 })
 
 
 //Recuperamos datos mediante getitem
 
 
 let name = localStorage.getItem("nombre")
 let age = localStorage.getItem("edad")
 let email = localStorage.getItem("mail")
 let text = localStorage.getItem("mensaje")
 
 
 console.log(nombre)
 console.log(edad)
 console.log(mail)
 console.log(mensaje)
 
 
 
 //Librerias: aplico sweet alet en botón de "enviar" en formulario pagina "contacto"
 
 let enviar = document.getElementById('enviar');

 enviar.addEventListener("click", function () {
    Swal.fire({
        title: '¿Seguro que quieres enviar?',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        denyButtonText: `No enviar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Gracias por tu mensaje, nos comunicaremos a la brevedad', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No enviado', '', 'info')
        }
      });
 })