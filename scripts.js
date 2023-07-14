/* menu */

window.addEventListener('scroll', function(){
    var head = this.document.querySelector('#navegacion');
    head.classList.toggle('abajo', this.window.scrollY>0);
})

/* sidebar */

const btnToggle = document.querySelector('.btn-side');
const btnToggle2 = document.querySelector('.somb-btn');
const btnToggle3 = document.querySelector('.btn-menu');

btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sombra').classList.toggle('active2');
});
btnToggle2.addEventListener('click', function(){
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sombra').classList.remove('active2');
    document.getElementById('menu-resp').classList.remove('active3');
});
btnToggle3.addEventListener('click', function(){
    document.getElementById('menu-resp').classList.toggle('active3');
    document.getElementById('sombra').classList.toggle('active2');
});

const btnTienda = document.getElementsByClassName('btn-cat-tienda');

for (i=0; i<btnTienda.length; i++) {
    btnTienda[i].addEventListener('click', function () {
        this.classList.toggle('active4')
    })
}

/* Carrusel */

const carrusel = document.querySelector('.carrusel');
const carrusel2 = document.querySelector('.carrusel2');

let maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
let maxScroll2 = carrusel2.scrollWidth - carrusel2.clientWidth;
let intervalo = null;
let paso = carrusel.clientWidth;
let car2width;

if (paso>=900) {
    car2width = carrusel2.clientWidth/3;
}else if (paso>=720){
    car2width = carrusel2.clientWidth/2;
}else{
    car2width = carrusel2.clientWidth;
}

let paso2 = car2width;

const mueve = () => {
    intervalo = setInterval(function() {
        if (carrusel.scrollLeft === maxScroll) {
            paso = -(2*paso);
        }
        else{
            paso = carrusel.clientWidth;
        }
        if (carrusel2.scrollLeft === maxScroll2) {
            paso2 = -(5*paso2);
        }
        else{
            paso2 = car2width;
        }
        carrusel.scrollLeft = carrusel.scrollLeft + paso;
        carrusel2.scrollLeft = carrusel2.scrollLeft + paso2;
    }, 2000) /* Controlador de tiempo del carrusel */
}

mueve();