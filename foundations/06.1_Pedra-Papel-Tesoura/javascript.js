

let pontosMaquina = 0
let pontosJogador = 0

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

const conteinerBotoes = document.querySelector("#div");
conteinerBotoes.style.marginLeft = "10px";

const botaoPedraJogador = document.createElement("button");
botaoPedraJogador.textContent = "Pedra";
botaoPedraJogador.style.marginRight = "20px";

const botaoPapelJogador = document.createElement("button");
botaoPapelJogador.textContent = "Papel";
botaoPapelJogador.style.marginRight = "20px";

const botaoTesouraJogador = document.createElement("button");
botaoTesouraJogador.textContent = "Tesoura";

conteinerBotoes.appendChild(botaoPedraJogador);
conteinerBotoes.appendChild(botaoPapelJogador);
conteinerBotoes.appendChild(botaoTesouraJogador);

function partida(maquina, jogador) {
    pedraTesoura = "\nPedra amassa tesoura."
    pedraPapel = "\nPapel embrulha pedra."
    tesouraPapel = "\nTesoura corta papel."
    maquinaVence = " Máquina vence a rodada."
    jogadorVence = " Jogador vence a rodada."
    empate = "\nRodada empatada."
    switch (maquina) {
        case ("Pedra"):
            if (jogador == "Tesoura") {
                pontosMaquina += 1
                return pedraTesoura + maquinaVence
            } else if (jogador == "Pedra") {
                return empate
            } else {
                pontosJogador += 1
                return pedraPapel + jogadorVence
            } 
        case ("Papel"):
            if (jogador == "Tesoura") {
                pontosJogador += 1
                return tesouraPapel + jogadorVence
            } else if (jogador == "Papel") {
                return empate
            } else {
                pontosMaquina += 1
                return pedraPapel + maquinaVence
            }
        case ("Tesoura"):
            if (jogador == "Pedra") {
                pontosJogador += 1
                return pedraTesoura + jogadorVence
            } else if (jogador == "Tesoura") {
                return empate
            } else {
                pontosMaquina += 1
                return tesouraPapel + maquinaVence
            }
        default:
            return "Jogada inválida."
    }
}
conteinerBotoes.addEventListener("click", (evento) => {
    const maquina = escolhaMaquina();
    const jogador = evento.target.textContent;

    console.log();
    console.log("Sua jogada: " + jogador);
    console.log(partida(maquina, jogador));

    const conteinerResultado = document.createElement("div");
    conteinerBotoes.appendChild(conteinerResultado);

    const paraMaquina = document.createElement("p");
    paraMaquina.textContent = "\nJogada da máquina: " + maquina;

    conteinerResultado.appendChild(paraMaquina);
});


// console.log("Jogadas:")
// console.log("Máquina:", maquina)
// console.log("Jogador:", jogador)
// console.log(partida(maquina, jogador))
// console.log("\nPlacar:")
// console.log("Pontuação da máquina:", pontosMaquina)
// console.log("Pontuação do jogador:", pontosJogador, "\n\n")


// console.log("\n\nFim de jogo.")
// console.log("\nPlacar final:")
// console.log("Jogador", pontosJogador, "x", pontosMaquina, "Máquina")

// if (pontosMaquina > pontosJogador) {
// console.log("A máquina venceu a partida. Tente novamente, jogador.")
// } else if (pontosMaquina == pontosJogador) {
// console.log("A Partida terminou empatada.")
// } else {
// console.log("O jogador venceu a partida.")
// }