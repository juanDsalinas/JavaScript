const marcopuntaje = document.querySelector('.puntaje');
let puntajeactual = 0;
const puntajelimite = 5;

const htmlMapa = Array.from(Array(puntajelimite)).map((item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

marcopuntaje.innerHTML = htmlMapa.join("");

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e => {
        // console.log("Funciona");
        const position = item.getAttribute("data-pos");

        if(puntajeactual === parseInt(position) + 1){
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris =>{
            if(cuadraditoGris.classList.contains("selec")){
                cuadraditoGris.classList.remove("selec");
            }
        })

        for (let i = 0; i <= position; i++) {
            const cuadradito = document.querySelector(`.item-${i}`);
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec");
            }
        }

        puntajeactual = parseInt(position) + 1;
    });


    
});