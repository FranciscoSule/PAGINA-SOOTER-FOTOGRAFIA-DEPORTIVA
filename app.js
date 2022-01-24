document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.fondo');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        if( sobreFestival.getBoundingClientRect().bottom < 0 ){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}




function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
   for(let i = 1; i<= 9; i++){
       const imagen = document.createElement('picture');
       imagen.innerHTML =`
               <img loading="lazy" src="fotos/${i}.jpeg" alt="galeria">`;

    imagen.onclick = function(){
        mostrarImagen(i);
    }
    
       galeria.appendChild(imagen);
   }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML =`
    <img loading="lazy"  src="fotos/${id}.jpeg" alt="galeria">`;
 
//crea el overlay con la imagen
  const overlay = document.createElement('DIV');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');
overlay.onclick = function(){
    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
       overlay.remove(); 
}

  //boton para cerrar el modal
  const cerrarModal = document.createElement('P');
  cerrarModal.textContent ='X';
  cerrarModal.classList.add('btn-cerrar');
cerrarModal.onclick = function(){
    const body = document.querySelector('body');
 body.classList.remove('fijar-body');
    overlay.remove(); 
}
  overlay.appendChild(cerrarModal);

  //añadirlo al html
 const body = document.querySelector('body');
 body.appendChild(overlay);
 body.classList.add('fijar-body');
}