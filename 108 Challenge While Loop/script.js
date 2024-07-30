function beer() {
    let b = 99;
    while(b > 0) {
        console.log(`${b} bottles of beer on the wall, ${b--} bottles of beer.
Take one down and pass it around, ${b} bottles of beer on the wall.`);
    } 
}

beer();