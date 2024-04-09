function saludar(){
    Swal.fire({
        title: "Ya la pediste eee",
        text: "Te llegará en mmm unos días",
        icon: "success"
      });

}
 
let btn = document.getElementById("boton");
btn.addEventListener("click", saludar)

const seccionesOcultas = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entry) => {

    entry.target.classList.toggle('mostrar', entry.isIntersecting)
    });

},

{threshold:0}

);

seccionesOcultas.forEach((seccion) => observer.observe(seccion))