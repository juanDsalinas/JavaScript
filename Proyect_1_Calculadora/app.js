const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton =>{
    boton.addEventListener('click',()=>{
        // constante que muestra en la pantalla
        const botonOn = boton.textContent;

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // eval evalua las expresiones de la pantalla
        // los toma como una operacion matematica        
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "¡ERROR!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return 
        }
        
    })
})