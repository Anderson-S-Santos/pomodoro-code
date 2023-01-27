const milissegundosPomodoro = 1500000 // Usando 4 segundos para teste. Tempo oficial -> 25x60x1000
const milissegundosIntervaloCurto = 300000 // Intervalo de 5min = 300000 milissegundos
const milissegundosIntervaloLongo = 900000
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
const marcador = document.querySelector("#marcadorDePomodoros")
const modoAutomatico = document.querySelector('#modoAutomatico')
const tamanhoDoCiclo = 4
let milissegundosRestantes = 0
let contador
let modo = ''

const audioInicioPomodoro = new Audio("../audio/audio_inicioPomodoro.ogg")
const audioFimPomodoro = new Audio("../audio/audio_fimPomodoro.ogg")
const audioInicioIntervalo = new Audio("../audio/audio_inicioIntervalo.ogg")
const audioFimIntervalo = new Audio("../audio/audio_fimIntervalo.ogg")


disparador.addEventListener('click', disparaContador)

function disparaContador() {
    console.log('Disparador ativado!')

    if (disparador.textContent == "Pausar") {
        clearInterval(contador)
        disparador.textContent = "Retomar"
    } else {
        if (disparador.textContent == "Começar") {
            modo = "pomodoro"

            audioInicioPomodoro.play()

            milissegundosRestantes = milissegundosPomodoro - 1000
            marcador.textContent = parseInt(marcador.textContent) + 1
        } else if (disparador.textContent == "Intervalo") {
            modo = "intervalo"

            audioInicioIntervalo.play()

            if (marcador.textContent == tamanhoDoCiclo) {
                milissegundosRestantes = milissegundosIntervaloLongo
            } else {
                milissegundosRestantes = milissegundosIntervaloCurto
            }
            milissegundosRestantes -= 1000
        }
        disparador.textContent = "Pausar"
        contador = setInterval('contadorDeSegundos()', 1000);
    }
}

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = '00:00'
        console.log("O tempo do Pomodoro acabou! Vá descansar!")

        if (modo == "pomodoro") {
            audioFimPomodoro.play()

            disparador.textContent = "Intervalo"
            if (marcador.textContent == tamanhoDoCiclo) {
                document.querySelector('body').style.background = "#397097"
                disparador.style.color = "#397097"
            } else {
                document.querySelector('body').style.background = "#38858a"
                disparador.style.color = "#38858a"
            }
        } else if (modo == "intervalo") {
            audioFimIntervalo.play()

            disparador.textContent = "Começar"
            document.querySelector('body').style.background = "#C84949"
            disparador.style.color = "#C84949"
        }

        if(modoAutomatico.checked) {
            setTimeout(disparaContador, 3000)
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




