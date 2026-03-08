
const corpoPagina = document.querySelector("#corpoPagina");

const divGrid = document.querySelector(".divGrid");

for (let linha = 0; linha < 16; linha++) {
    const divLinha = document.createElement("div");
    divLinha.style.display = "flex";

    for (let coluna = 0; coluna < 16; coluna++) {
        const divColuna = document.createElement("div");
        divColuna.style.backgroundColor = "black";
        divColuna.style.height = "10px";
        divColuna.style.width = "10px";
        divColuna.style.border = "1px solid white";
        divLinha.appendChild(divColuna);

        divColuna.addEventListener("mouseover", () => {divColuna.style.backgroundColor = "white"});
    }

    divGrid.appendChild(divLinha);
}