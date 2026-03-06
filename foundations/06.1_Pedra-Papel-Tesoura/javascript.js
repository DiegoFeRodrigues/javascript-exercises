

const corpoPagina = document.querySelector(".conteinerCorpo");
corpoPagina.style.fontFamily = "Arial";
corpoPagina.style.marginLeft = "20px";

const conteinerInicio = document.createElement("div");
conteinerInicio.classList.add("conteinerInicio");
corpoPagina.appendChild(conteinerInicio);

const titulo = document.createElement("h1");
titulo.textContent = "Pedra, papel e tesoura";

const instrucoes = document.createElement("h3");
instrucoes.textContent = "Dispute esse jogo clássico com a máquina. Vence quem fizer 5 pontos primeiro."

const jogadaJogador = document.createElement("h3");
jogadaJogador.textContent = "Sua jogada:";

conteinerInicio.appendChild(titulo);
conteinerInicio.appendChild(instrucoes);
conteinerInicio.appendChild(jogadaJogador);

const conteinerBotoes = document.createElement("div");
conteinerBotoes.classList.add("conteinerBotoes");
corpoPagina.appendChild(conteinerBotoes);

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

const conteinerResultado = document.createElement("div");
conteinerResultado.classList.add("conteinerResultados");
conteinerBotoes.appendChild(conteinerResultado);

let contaRodada = 1;

conteinerBotoes.addEventListener("click", (evento) => {
    const maquina = escolhaMaquina();
    const jogador = evento.target.textContent;

    const mostraRodada = document.createElement("h2");
    mostraRodada.textContent = contaRodada + "ª rodada:"
    contaRodada += 1;

    const paraMaquina = document.createElement("h4");
    paraMaquina.textContent = "\nJogada da máquina: " + maquina;

    const paraJogador = document.createElement("h4");
    paraJogador.textContent = "Sua jogada: " + jogador;

    const resultadoRodada = document.createElement("h4");
    resultadoRodada.textContent = partida(maquina, jogador);

    const placarTemp = document.createElement("h3")
    placarTemp.textContent = "Placar: Máquina " + pontosMaquina + " x " + pontosJogador + " Jogador";
    
    const linhaFimRodada = document.createElement("div");
    linhaFimRodada.textContent = "----------------------------------------------------------------------"
    
    conteinerResultado.appendChild(mostraRodada);
    conteinerResultado.appendChild(paraMaquina);
    conteinerResultado.appendChild(paraJogador);
    conteinerResultado.appendChild(resultadoRodada);
    conteinerResultado.appendChild(placarTemp);
    conteinerResultado.appendChild(linhaFimRodada);

    conteinerBotoes.addEventListener("click", () => {
            conteinerResultado.removeChild(mostraRodada);
            conteinerResultado.removeChild(paraMaquina);
            conteinerResultado.removeChild(paraJogador);
            conteinerResultado.removeChild(resultadoRodada);
            conteinerResultado.removeChild(placarTemp);
            conteinerResultado.removeChild(linhaFimRodada);
        });

    if (pontosMaquina == 5 || pontosJogador == 5) {

        corpoPagina.removeChild(conteinerInicio);
        corpoPagina.removeChild(conteinerBotoes);
        conteinerBotoes.removeChild(conteinerResultado);
        
        const conteinerFinal = document.createElement("div");
        conteinerFinal.classList.add("conteinerFinal");
        corpoPagina.appendChild(conteinerFinal);

        const tituloFinal = document.createElement("h1");
        tituloFinal.textContent = "Fim de jogo"

        const placarFinal = document.createElement("h2");
        placarFinal.textContent = "Placar final:";

        const placar = document.createElement("h3");
        placar.textContent = "Máquina " + pontosMaquina + " x " + pontosJogador + " Jogador";

        conteinerFinal.appendChild(tituloFinal)
        conteinerFinal.appendChild(placarFinal)
        conteinerFinal.appendChild(placar)

        if (pontosMaquina > pontosJogador) {
            const maquinaVence = document.createElement("h2");
            maquinaVence.textContent = `A máquina venceu a partida na ${contaRodada}ª rodada. Tente novamente, jogador.`
            conteinerFinal.appendChild(maquinaVence);
        } else {
            const jogadorVence = document.createElement("h2");
            jogadorVence.textContent = `O jogador venceu a partida na ${contaRodada}ª rodada.`
            conteinerFinal.appendChild(jogadorVence)
        }
    }
});