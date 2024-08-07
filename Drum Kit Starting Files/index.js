let quantidadeBotoes = document.querySelectorAll('.drum').length;

for(let i = 0; i < quantidadeBotoes; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {//evento de clique de mouse
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    } );
}

document.addEventListener('keydown', function(event) {//evento de leitura de tecla com callback function
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch(key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
        }
}

function buttonAnimation(currentKey) { //função para animação do botão
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() { //função de timer já pronta;
        activeButton.classList.remove('pressed');
    }, 100)
}
