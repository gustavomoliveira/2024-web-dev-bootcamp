function whosPaying(names) {
    return `${names[Math.floor(Math.random() * names.length)]} is going to buy lunch today!`;
}

console.log(whosPaying(['marcelo', 'vinicius', 'gustavo', 'mari', 'barto']));