
// Segundo Reloj
const relojDigital = document.querySelector(".reloj2");
const addTime = document.querySelector(".btn-add");

// deg = valor de los grados
const deg = 6;
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    // Reloj Analogo
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

    // Reloj digital
    var horita = tiempo.getHours();
    var minutosito = tiempo.getMinutes();
    var segundosito = tiempo.getSeconds();
    
    const amOpm = horita >= 12 ? 'PM' : 'AM';
    horita = horita % 12 || 12;
    minutosito = minutosito < 10 ? '0' + minutosito : minutosito;


    horita = horita < 10 ? "0" + horita: horita;
    minutosito = minutosito < 10 ? "0" + minutosito: minutosito;
    segundosito = segundosito < 10 ? "0" + segundosito: segundosito;
    
    let pantallaReloj = horita + ":" + minutosito + ":" + segundosito + " " + amOpm;
    relojDigital.innerHTML = pantallaReloj;

})