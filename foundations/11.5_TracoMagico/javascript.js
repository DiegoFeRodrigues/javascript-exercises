
const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.fontFamily = "Arial";

const divGrid = document.querySelector(".divGrid");

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

        divGridPadrao.appendChild(divLinha);
    }
}

grid(tamanhoGridPadrao);