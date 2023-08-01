let numRandom = Math.floor(Math.random()*100) + 1

let numEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

// Esta accion se va a realizar cuando comprobemos el número
function comprobar(){
    let numIngresado = parseInt(numEntrada.value)

    if(numIngresado < 1 || numIngresado > 100 || isNaN(numIngresado)) {
        mensaje.textContent = "Por favor ingresa un número entre 0 y 100"
        mensaje.style.color = 'red';
        return
    }
    if(numIngresado === numRandom) {
        mensaje.textContent = "¡Felicidades! Número correcto";
        mensaje.style.color = 'green';
        numEntrada.disabled = true;
    } else if (numIngresado < numRandom) {
        mensaje.textContent = '¡Estuviste cerca! El número es más alto';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Estuviste cerca! El número es más bajo';
        mensaje.style.color = 'red';
    }
}