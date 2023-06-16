// 2 variables -> img, tiempo
// Evento: window.onload -> 
// Codigo al cargar la pagina
window.onload = function() {
    const imagenes = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg',
        'img/img7.jpg',
        'img/img8.jpg',
        'img/img9.jpg',
        'img/img10.jpg',
        'img/img11.jpg',
        'img/img12.jpg',
        'img/img13.jpg',
        'img/img14.jpg',
        'img/img15.jpg',
        'img/img16.jpg',
        'img/img17.jpg',
        'img/img18.jpg',
        'img/img19.jpg',
        'img/img20.jpg',
        'img/img21.jpg',
        'img/img22.jpg',
        'img/img23.jpg',
        'img/img24.jpg',
        'img/img25.jpg'
    ];
    const tiempo_intervalo = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // FUNCIONES 

    // Que cambia la foto en la iguiente posición

    function pasarFoto() {
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    //Cambia la fotoa la anterior posición
    function retrocederFoto(){
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else{
            posicionActual--;
        }
        renderizarImagen();
    }

    //Actualizar la imagen dependiendo de la posición actual
    function renderizarImagen(){ //traer la image y ponerla de fondo
        $imagen.style.backgroundImage =`url(${imagenes[posicionActual]})`;
    }

    //Activar el boton PLAY
    function playIntervalo(){
        intervalo = setInterval(pasarFoto, tiempo_intervalo);
        //Activar y desactivar botones
        $botonAvanzar.setAttribute('disabled',true);
        $botonRetroceder.setAttribute('disabled',true);
        $botonPlay.setAttribute('disabled',true);
        $botonStop.removeAttribute('disabled');
    }

    // Activar el boton STOP
    function stopIntervalo(){
        clearInterval(intervalo);
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled',true);
    }

    //Eventos -> interacción java y los usuarios
    $botonAvanzar.addEventListener('click',pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click',playIntervalo);
    $botonStop.addEventListener('click',stopIntervalo);


    renderizarImagen();
}