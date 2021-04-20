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