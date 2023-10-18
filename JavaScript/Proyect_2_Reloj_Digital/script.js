const relojDigital = document.querySelector(".reloj");
const addTime = document.querySelector(".btn-add");

/* Funciona */ 

function calcularTiempo (){
    let tiempo = new Date();

    var horas = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();
    
    horas = horas < 10 ? "0" + horas: horas;
    minutos = minutos < 10 ? "0" + minutos: minutos;
    segundos = segundos < 10 ? "0" + segundos: segundos;

    let pantallaReloj = horas + ":" + minutos + ":" + segundos;
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo,100);

