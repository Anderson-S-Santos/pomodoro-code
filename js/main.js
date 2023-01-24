const milissegundosPomodoro = 4000 // Usando 4 segundos para teste. Tempo oficial -> 25x60x1000
const milissegundosIntervalo = 300000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = 0
let contador


disparador.addEventListener('click', () => {
    console.log('Disparador ativado!')

    if (disparador.textContent == 'Começar') {
        milissegundosRestantes = milissegundosPomodoro - 1000
    } else {
        milissegundosRestantes = milissegundosIntervalo - 1000
    }

    contador = setInterval('contadorDeSegundos()', 1000);
})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = '00:00'
        console.log("O tempo do Pomodoro acabou! Vá descansar!")

        if (disparador.textContent == "Começar") {
            disparador.textContent = "Intervalo"
            document.querySelector('body').style.background = "rgb(56,133,138)"
            disparador.style.color = "rgb(56,133,138)"
        } else {
            disparador.textContent = "Começar"
            document.querySelector('body').style.background = "#C84949"
            disparador.style.color = "#C84949"
        }

        clearInterval(contador)
    } else {
        cronometro.textContent = formatarTempo(milissegundosRestantes / 1000)
    }

    milissegundosRestantes -= 1000;
}

function formatarTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0'))
}

