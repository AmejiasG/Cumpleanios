function saludar(){
    Swal.fire({
        title: "Ya la pediste eee",
        text: "Te llegará en mmm unos días",
        icon: "success"
      });

      const msg = document.getElementById("disfruta");
      msg.innerHTML =  `<div><h2>disfruta :)<h2/></div>`
      console.log("saludando")
}
 
const btn = document.getElementById("boton");
btn.addEventListener("click", saludar)