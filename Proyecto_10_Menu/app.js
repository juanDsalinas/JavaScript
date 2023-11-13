const navigation = document.querySelector(".menuPrincipal");
const open = document.getElementById("abrir");
const close = document.getElementById("cerrar");

open.addEventListener("click",()=>{
    navigation.classList.add("visible");
});

close.addEventListener("click",()=>{
    navigation.classList.remove("visible");
});