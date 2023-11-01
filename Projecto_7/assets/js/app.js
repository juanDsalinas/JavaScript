let hr = mn = sg = ms = "0"+ 0, iniciarTiempo;

const btnIniciar = document.querySelector(".iniciar");
const btnDetener = document.querySelector(".detener");
const btnPause = document.querySelector(".reiniciar");

btnIniciar.addEventListener("click",iniciar);
btnDetener.addEventListener("click",detener)
btnPause.addEventListener("click",reiniciar)

function iniciar(){
    btnIniciar.classList.add("on");

    iniciarTiempo = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms===100){
            sg++;
            sg = sg  < 10 ? "0" + sg : sg;
            ms = "0" + 0;
        }

        if(sg===60){
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
        }

        if(mn===60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
        }

        // mostrar tiempo
        ingresarValor();

    },10);
}

function detener(){
    btnIniciar.classList.remove("on");
    // este metodo DETIENE el refresco automatico del tiempo
    // la de iniciar Tiempo
    clearInterval(iniciarTiempo)
}

function reiniciar(){
    btnIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "0" + 0 ;
    // establece los valores en cero
    ingresarValor();
}

function ingresarValor(){
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('hora').innerHTML = hr;
}