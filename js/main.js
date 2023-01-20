const tempoPomodoro = 4000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log('Disparador ativado!')
    setTimeout(() => {
        console.log("Aacbou o Pomodoro!")
    }, tempoPomodoro);
    
})


