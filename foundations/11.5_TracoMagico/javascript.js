
const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.fontFamily = "Arial";

const msgUsuario = document.querySelector(".msgUsuario");

const divGrid = document.querySelector(".divGrid");
divGrid.style.height = "700px";
divGrid.style.width = "700px";
divGrid.style.overflow = "hidden";
divGrid.style.border = "3px solid red";

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
            divColuna.style.backgroundColor = "black";
            divColuna.style.height = "10px";
            divColuna.style.width = "10px";
            divColuna.style.border = "1px solid white";
            divLinha.appendChild(divColuna);
    
            divColuna.addEventListener("mouseover", () => {divColuna.style.backgroundColor = "white"});
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
    corpoPagina.removeChild(document.querySelector("p"));
    corpoPagina.removeChild(document.querySelector("button"));
    let tamanhoEscolhido = prompt("Informe o tamanho desejado (máximo é 100):")
    while (tamanhoEscolhido > 100) {
        tamanhoEscolhido = prompt("O tamanho máximo é 100. Digite o tamanho desejado:")
    }
    msgUsuario.textContent = `Quadro com tamanho ${tamanhoEscolhido} x ${tamanhoEscolhido}:`
    grid(tamanhoEscolhido);
})