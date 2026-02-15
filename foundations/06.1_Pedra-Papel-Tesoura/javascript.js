

function escolhaMaquina() {
    maquinaEscolheu = Math.floor(Math.random() * 3)
    switch (maquinaEscolheu) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }
}

function escolhaJogador() {
    return prompt("Sua jogada: ")
}

let pontosMaquina = 0
let pontosJogador = 0

console.log("Pedra, papel e Tesoura \n\n")
console.log("Jogadas:")
console.log("Máquina:", escolhaMaquina())
console.log("Jogador:", escolhaJogador())
console.log("\nPlacar:")
console.log("Pontuação da máquina:", pontosMaquina)
console.log("Pontuação do jogador:", pontosJogador)