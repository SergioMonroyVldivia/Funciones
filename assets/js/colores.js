// ========================================================
// PARTE 1: Cambiar a negro los 4 divs originales al hacer clic
// ========================================================
const cambiarANegro = (event) => {
    event.target.style.backgroundColor = 'black';
};

// Seleccionamos los divs y le aplicamos el evento (asumiendo que en tu HTML tienen estos IDs)
document.getElementById('azul').addEventListener('click', cambiarANegro);
document.getElementById('rojo').addEventListener('click', cambiarANegro);
document.getElementById('verde').addEventListener('click', cambiarANegro);
document.getElementById('amarillo').addEventListener('click', cambiarANegro);


let colorGlobal = "";
const keyDiv = document.getElementById("key");

document.addEventListener('keydown', function(event) {
   
    if (event.key === 'a' || event.key === 'A') {
        colorGlobal = 'pink';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (event.key === 's' || event.key === 'S') {
        colorGlobal = 'orange';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (event.key === 'd' || event.key === 'D') {
        colorGlobal = 'lightblue';
        keyDiv.style.backgroundColor = colorGlobal;
    } 
  
    else if (event.key === 'q' || event.key === 'Q') {
        crearNuevoDiv('purple');
    } else if (event.key === 'w' || event.key === 'W') {
        crearNuevoDiv('gray');
    } else if (event.key === 'e' || event.key === 'E') {
        crearNuevoDiv('brown');
    }
});

function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    nuevoDiv.style.display = 'inline-block';
    nuevoDiv.style.margin = '10px';
    
    document.body.appendChild(nuevoDiv);
}