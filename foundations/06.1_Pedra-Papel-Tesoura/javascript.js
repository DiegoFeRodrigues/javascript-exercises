

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

let maquina = escolhaMaquina()
let jogador = escolhaJogador()

function partida(maquina, jogador) {
    pedraTesoura = "\nPedra amassa tesoura."
    maquinaVence = " Máquina vence a rodada"
    switch (maquina) {
        case ("Pedra"):
            if (jogador == "Tesoura") {
                return pedraTesoura + maquinaVence
            }
    }
}

console.log("Pedra, papel e Tesoura \n\n")
console.log("Jogadas:")
console.log("Máquina:", maquina)
console.log("Jogador:", jogador)
console.log("\nPlacar:")
console.log("Pontuação da máquina:", pontosMaquina)
console.log("Pontuação do jogador:", pontosJogador)

console.log(partida(maquina, jogador))