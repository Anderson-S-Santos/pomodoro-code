const milissegundosPomodoro = 4000 // Usando 4 segundos para teste. Tempo oficial -> 25x60x1000
const milissegundosIntervalo = 4000 // Intervalo de 5min = 300000 milissegundos
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
const marcador = document.querySelector("#marcadorDePomodoros")
let milissegundosRestantes = 0
let contador
let modo = ''


disparador.addEventListener('click', () => {
    console.log('Disparador ativado!')

    if (disparador.textContent == "Pausar") {
        clearInterval(contador)
        disparador.textContent = "Retomar"
    } else {
        if (disparador.textContent == "Começar") {
            modo = "pomodoro"
            milissegundosRestantes = milissegundosPomodoro - 1000
            marcador.textContent = parseInt(marcador.textContent) + 1
        } else if (disparador.textContent == "Intervalo") {
            modo = "intervalo"
            milissegundosRestantes = milissegundosIntervalo - 1000
        }
        disparador.textContent = "Pausar"
        contador = setInterval('contadorDeSegundos()', 1000);
    }


})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = '00:00'
        console.log("O tempo do Pomodoro acabou! Vá descansar!")

        if (modo == "pomodoro") {
            disparador.textContent = "Intervalo"
            document.querySelector('body').style.background = "rgb(56,133,138)"
            disparador.style.color = "rgb(56,133,138)"
        } else if (modo == "intervalo") {
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

