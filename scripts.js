const logo = document.querySelector('.logo-header');
const cotizacionTexto = document.querySelector('.cotizacion-texto');
const cotizacion = document.querySelector('.cotizacion');
const camisaPolo = document.querySelector('.camisa-polo');
const textoPolo = document.querySelector('.texto-polo');

window.addEventListener("scroll", function() {
    let rect = logo.getBoundingClientRect();
    if (rect.top < 0) {
      logo.style.filter = 'blur(1px)';
    } else {
      logo.style.filter = 'blur(0px)';
    }
  });


  window.addEventListener("scroll", function(){
    let rect = cotizacion.getBoundingClientRect();
    if(rect.top < 0){
        cotizacionTexto.innerText = 'Cotización';
    }else{
        cotizacionTexto.innerText = 'Bienvenido';
    }
  })

  window.addEventListener("scroll", function(){
    let rect = camisaPolo.getBoundingClientRect();
    if(rect.top < 50){
        textoPolo.innerText = 'Polo';
    }else if(rect.top < 140){
        textoPolo.innerText = 'Tipo';
    }else{
        textoPolo.innerText = 'Camisa';
        
    }
  })

