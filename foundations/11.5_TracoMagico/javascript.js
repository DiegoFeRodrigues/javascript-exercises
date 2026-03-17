
const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.fontFamily = "Arial";
corpoPagina.style.display = "flex";
corpoPagina.style.flexDirection = "column";
corpoPagina.style.alignItems = "center";
corpoPagina.style.maxHeight = "100vh";
corpoPagina.style.margin = "0";
corpoPagina.style.backgroundColor = "lightGrey";

const msgUsuario = document.querySelector(".msgUsuario");

const divGrid = document.querySelector(".divGrid");
divGrid.style.maxHeight = "745px";
divGrid.style.maxWidth = "745px";
divGrid.style.overflow = "hidden";
divGrid.style.display = "flex";
divGrid.style.flexDirection = "column";
divGrid.style.alignItems = "center";
divGrid.style.marginTop = "10px";
divGrid.style.border = "10px double black";

const tamanhoGridPadrao = 16;

const divGridPadrao = document.createElement("div");
divGridPadrao.classList.add("gridPadrao");
divGrid.appendChild(divGridPadrao);

function grid(tamanho) {
    for (let linha = 0; linha < tamanho; linha++) {
        const divLinha = document.createElement("div");
        divLinha.style.display = "flex";
    
        for (let coluna = 0; coluna < tamanho; coluna++) {
            const divColuna = document.createElement("div");
            divColuna.style.backgroundColor = "white";
            divColuna.style.height = "7px";
            divColuna.style.width = "7px";
            divColuna.style.border = "1px solid lightGrey";
            divLinha.appendChild(divColuna);
    
            divColuna.addEventListener("mouseover", () => {
                divColuna.style.backgroundColor = "black"
                divColuna.style.border = "1px solid black"
            });
        }
        if (tamanho == tamanhoGridPadrao) {
            divGridPadrao.appendChild(divLinha);
        } else {
            divGrid.appendChild(divLinha);
        }
    }
}

grid(tamanhoGridPadrao);

const botaoTamanho = document.querySelector(".botaoTamanho");
botaoTamanho.addEventListener("click", () => {
    divGrid.removeChild(divGridPadrao);
    let tamanhoEscolhido = prompt("Informe o tamanho desejado (máximo é 100):")
    while (tamanhoEscolhido > 100) {
        tamanhoEscolhido = prompt("O tamanho máximo é 100. Digite o tamanho desejado:")
    }
    const msgTamanhoEscolhido = document.createElement("h4");
    msgUsuario.appendChild(msgTamanhoEscolhido);
    msgTamanhoEscolhido.textContent = `Quadro com tamanho ${tamanhoEscolhido}px x ${tamanhoEscolhido}px:`
    document.querySelectorAll("p").forEach(para => msgUsuario.removeChild(para));
    corpoPagina.removeChild(document.querySelector("button"));
    grid(tamanhoEscolhido);
})