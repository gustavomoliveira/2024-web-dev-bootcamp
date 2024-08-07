let quantidadeBotoes = document.querySelectorAll('.drum').length;

for(let i =0; i < quantidadeBotoes; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        alert('Click!');
    } );
}

