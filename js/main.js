const milissegundosPomodoro = 4000 // Usando 4 segundos para teste. Tempo oficial -> 25x60x1000
const disparador = document.querySelector('#disparador')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador


disparador.addEventListener('click', () => {
    console.log('Disparador ativado!')

    console.log('faltam', milissegundosPomodoro/1000)

    contador = setInterval('contadorDeSegundos()', 1000);
})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        console.log("Acabou o Pomodoro!");
        alert("O tempo do Pomodoro acabou! Vá descansar!")

        clearInterval(contador)
    } else {
        console.log('faltam', milissegundosRestantes/1000)
    }

    milissegundosRestantes -= 1000;
}


