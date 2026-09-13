
const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.fontFamily = "Arial";
corpoPagina.style.color = "#b3b2b2";
corpoPagina.style.display = "flex";
corpoPagina.style.flexDirection = "column";
corpoPagina.style.alignItems = "center";
corpoPagina.style.maxHeight = "100vh";
corpoPagina.style.minHeight = "100vh";
corpoPagina.style.margin = "0";
corpoPagina.style.backgroundColor = "#292929";

const botaoTamanho = document.querySelector(".botaoTamanho");
botaoTamanho.style.padding = "9px";
botaoTamanho.style.borderRadius = "16px";
botaoTamanho.style.backgroundColor = "#292929";
botaoTamanho.style.color = "white";
botaoTamanho.style.fontSize = "16px";
botaoTamanho.style.fontWeight = "700";
botaoTamanho.style.border = "2px solid white"

const tamanhoGridPadrao = 16;

function nAleatorio(number) {
  return Math.floor(Math.random() * (number + 1));
}

function grid(tamanho) {

    let opacidadeInicialQuadrados = 1;
    
    const msgTamanhoEscolhido = document.createElement("h5");
    msgTamanhoEscolhido.classList = "msgUsuario";
    msgTamanhoEscolhido.style.margin = "20 0 0";
    if (tamanho === tamanhoGridPadrao) {
        msgTamanhoEscolhido.textContent = `Quadro com tamanho padrão (${tamanho}px x ${tamanho}px):`
    } else {
        msgTamanhoEscolhido.textContent = `Quadro com tamanho ${tamanho}px x ${tamanho}px:`
    }

    corpoPagina.appendChild(msgTamanhoEscolhido);

    const divGrid = document.createElement("div");
    divGrid.classList = "divGrid";
    divGrid.style.maxHeight = "745px";
    divGrid.style.maxWidth = "745px";
    divGrid.style.overflow = "hidden";
    divGrid.style.display = "flex";
    divGrid.style.flexDirection = "column";
    divGrid.style.alignItems = "center";
    divGrid.style.marginTop = "10px";
    divGrid.style.border = "7px ridge #292929";
    divGrid.style.backgroundColor = "black";

    corpoPagina.appendChild(divGrid);

    for (let linha = 0; linha < tamanho; linha++) {
        const divLinha = document.createElement("div");
        divLinha.style.display = "flex";
    
        for (let coluna = 0; coluna < tamanho; coluna++) {
            const divColuna = document.createElement("div");
            divColuna.style.backgroundColor = "white";
            divColuna.style.height = "6px";
            divColuna.style.width = "6px";
            divColuna.style.border = "1px solid lightGrey";
            divLinha.appendChild(divColuna);
    
            divColuna.addEventListener("mouseover", () => {
                const corAleatoria = `rgb(${nAleatorio(255)} ${nAleatorio(255)} ${nAleatorio(255)})`;
                divColuna.style.backgroundColor = corAleatoria;
                divColuna.style.border = "1px solid black";
                divColuna.style.opacity = opacidadeInicialQuadrados -= 0.1;
            });
        }
        divGrid.appendChild(divLinha);
    }
}

grid(tamanhoGridPadrao);

botaoTamanho.addEventListener("click", () => {
    
    let tamanhoEscolhido = prompt("Informe o tamanho desejado (máximo: 100):")

    while (tamanhoEscolhido < 0 || tamanhoEscolhido > 100 
        || tamanhoEscolhido === "" || !Number.isInteger(+tamanhoEscolhido)) {
        tamanhoEscolhido = prompt("Erro: Tamanho inválido." +
        "\nO tamanho máximo é 100. Digite apenas números inteiros." +
        "\nCampo obrigatório. Não deixe em branco." +
        "\nCancele para manter o tamanho atual." +
        "\nOu digite o novo tamanho desejado:");
    }

    if (tamanhoEscolhido != null) {
        const divMsgUsuarioAntiga = document.querySelector(".msgUsuario");
        corpoPagina.removeChild(divMsgUsuarioAntiga);

        const divGridAntiga = document.querySelector(".divGrid");
        corpoPagina.removeChild(divGridAntiga);

        grid(+tamanhoEscolhido);
    }
})