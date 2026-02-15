

function escolhaMaquina() {
    maquinaEscolheu = Math.floor(Math.random() * 3)
    switch (maquinaEscolheu) {
        case 0:
            return "pedra"
        case 1:
            return "papel"
        case 2:
            return "tesoura"
    }
}

// function escolhaJogador() {
//     return prompt("Sua jogada: ").toLowerCase()
// }

let pontosMaquina = 0
let pontosJogador = 0

// let maquina = escolhaMaquina()
// let jogador = escolhaJogador()

// HARDCODE TEMPORÁRIO PARA FACILITAR TESTES:
let maquina = "papel"
let jogador = "tesoura"

function partida(maquina, jogador) {
    pedraTesoura = "\nPedra amassa tesoura."
    pedraPapel = "\nPapel embrulha pedra."
    tesouraPapel = "\nTesoura corta papel."
    maquinaVence = " Máquina vence a rodada."
    jogadorVence = " Jogador vence a rodada."
    empate = "\nRodada empatada."
    switch (maquina) {
        case ("pedra"):
            if (jogador == "tesoura") {
                pontosMaquina += 1
                return pedraTesoura + maquinaVence
            }
            else if (jogador == "pedra") {
                return empate
            }
            else {
                pontosJogador += 1
                return pedraPapel + jogadorVence
            }
        case ("papel"):
            if (jogador == "tesoura") {
                pontosJogador += 1
                return tesouraPapel + jogadorVence
            }
            else if (jogador == "papel") {
                return empate
            }
            else {
                pontosMaquina += 1
                return pedraPapel + maquinaVence
            }
    }
}

console.log("Pedra, papel e Tesoura \n\n")
console.log("Jogadas:")
console.log("Máquina:", maquina)
console.log("Jogador:", jogador)
console.log(partida(maquina, jogador))
console.log("\nPlacar:")
console.log("Pontuação da máquina:", pontosMaquina)
console.log("Pontuação do jogador:", pontosJogador)