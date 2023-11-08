//const e = document.getElementById('cuentaRegresiva');
let navidad = new Audio("./sound/mery.mp3");


const dias = document.querySelector('.dias')
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const texto = document.querySelector('.texto')

const iniciar = document.querySelector('.btn');
const pausa = document.querySelector('.btnPause');

const papa = document.querySelector('.papa');

iniciar.addEventListener("click",()=>{
    navidad.play()
});

pausa.addEventListener("click",()=>{
    navidad.pause()
});

function obtenerTiempoFaltante(fechaLimite){
    var ahora = new Date();
    // restar las dos fechas - se suman mil por el tiempo de refresco de la funcion
    // lo dividimos en mil para tener los segundos
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000)/1000;
    segundosFaltantes = ('0'+Math.floor(tiempoFaltante % 60)).slice(-2)
    minutosFaltantes = ('0'+Math.floor(tiempoFaltante / 60 % 60)).slice(-2)
    horasFaltantes = ('0'+Math.floor(tiempoFaltante / 3600 % 24)).slice(-2)
    diasFaltantes = ('0'+Math.floor(tiempoFaltante / (3600 * 24))).slice(-2)
    

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }
};


setInterval(()=>{
    console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));
    //e.innerHTML = `${diasFaltantes} d:${horasFaltantes} h:${horasFaltantes} m:${minutosFaltantes} s:${segundosFaltantes}`
},1000)



function cuentaRegresiva(tiempoFaltante,reloj,mensaje){
    // unico div del html
    const e = document.getElementById(reloj);

    // Tiempo Faltante
    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        // e.innerHTML = `${t.diasFaltantes} h:${t.horasFaltantes} m:${t.minutosFaltantes} s:${t.segundosFaltantes}`;
        dias.innerHTML = `${t.diasFaltantes}`
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`
        iniciar.classList.add('on');
        pausa.classList.add('on');


        if(t.tiempoFaltante < 1){
            // detener el refresco de la pantalla
            clearInterval(tiempoActual)
            dias.innerHTML = '00'
            horas.innerHTML = '00'
            minutos.innerHTML = '00'
            segundos.innerHTML = '00'
            texto.innerHTML = mensaje;
            iniciar.classList.remove('on');
            pausa.classList.remove('on');
            papa.classList.add('dance');
            // e.innerHTML = mensaje;
        } 

    },100)
    
};

cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!');