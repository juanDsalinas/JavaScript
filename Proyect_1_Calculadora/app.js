const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        const botonOp = boton.textContent;

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            }catch{
                pantalla.textContent = "¡Error!"
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOp
        }else if (pantalla.textContent.slice(-1) === '/' && botonOp === '/'){
            return;
        }else{
            pantalla.textContent += botonOp
        }

        if (boton.id === "limpiar"){
            pantalla.textContent ="0"
            return;
        }
    })
})