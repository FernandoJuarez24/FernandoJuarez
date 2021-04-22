/*DESARROLLADO POR FERNANDO JUAREZ ALDORICA*/
//CLASE ACTIVO
let enlace = document.querySelectorAll('.lista li a');

enlace.forEach((element) => {
	element.addEventListener('click', (event) => {
		enlace.forEach((link) => {
			link.classList.remove('activo');
		});
		event.target.classList.add('activo');
	});
});

//HOME
const btnMenu = document.querySelector('.btnMenu');
let on_off = true;

window.onscroll = () => {
    //HOME
    if (window.pageYOffset >= 500) {
    	document.querySelector('.home').style.right = '20px';
    }else{
    	document.querySelector('.home').style.right = '-100%';
    }

    document.querySelector('.home').addEventListener('click', () => {
    	document.body.scrollTop = '0';
    	document.documentElement.scrollTop = '0';
    });
}


let menu = document.querySelector('.contenedorMenu');
let containerMenu = document.querySelector('.menu');
let activador = true;


//Menu de animacion
btnMenu.addEventListener('click', () =>{
    
    document.querySelector('.btnMenu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0';
        menu.style.transition = '0.5s';

        activador = false;
    }else{
        activador = false;

        menu.style.left = '-100%';
        menu.style.transition = '0.5s';

        activador = true;
    }
});