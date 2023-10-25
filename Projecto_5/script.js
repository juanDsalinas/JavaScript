let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio("./sound/botonbailar.mp3");
let botonAudio = new Audio("./sound/baile.mp3");


function bailar() {
    if (esqueleto == "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        console.log("On");
        esqueletoStop.addEventListener("click", ()=>{
            botonSonido.play();
            botonAudio.play();
        })
        
    } else {
        esqueleto = "off";
        esqueletoStop.addEventListener("click", ()=>{
            botonAudio.pause();
        })
        esqueletoStop.classList.remove("on");
        console.log("Off");
    }
}