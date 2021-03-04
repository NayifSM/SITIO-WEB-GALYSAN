
/*GRID-FALERIA */
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }

});
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;

window.addEventListener('load', () => {
    /**no me gust lo cmabiare */
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            const titulo = elemento.parentNode.parentNode.dataset.titulo;
            const titulo2 = elemento.parentNode.parentNode.dataset.titulo2;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            document.querySelector('#overlay .titulo').innerHTML = titulo;
            document.querySelector('#overlay .titulo2').innerHTML = titulo2;
        });
    });
    // Eventlistener del boton de cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });
    // Eventlistener del overlay
    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });

});

const toggleMenu = ()=>{
    enlaces.classList.toggle("Eactivo");
    enlaces.style.trasition ="transform 0.5s  ease-in-out";
}
hamburguesa.addEventListener("click",function()
{
    toggleMenu();
    if(document.querySelector(".enlaces.Eactivo")){
        abierto=true;
    }else{
        abierto=false;
    }
})
window.addEventListener("click",function(e)
{
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false;
        }
    }
})
window.addEventListener("resize",function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.trasition= "none";
            abierto= false;
        }
    }
})