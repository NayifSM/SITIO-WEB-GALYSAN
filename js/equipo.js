
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;
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