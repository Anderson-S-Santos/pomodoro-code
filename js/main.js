const tempoPomodoro = 4000 // Usando 4 segundos para teste. Tempo oficial -> 25x60x1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log('Disparador ativado!')

    // Criando o crônometro
    setTimeout(() => {
        console.log("Aacbou o Pomodoro!")
        alert("O tempo do Pomodoro acabou! Vá descansar!")

        clearInterval(contador)
    }, tempoPomodoro);
    
    let contador = setInterval('contadorDeSegundos()', 1000);
})

function contadorDeSegundos() {
    console.log('tick')
}


