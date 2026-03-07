

const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.display = "flex";
corpoPagina.style.gap = "1px";

for (let linha = 0; linha < 16; linha++) {
    const divLinha = document.createElement("div");
    divLinha.style.display = "flex";
    divLinha.style.backgroundColor = "black";
    divLinha.style.height = "10px";
    divLinha.style.width = "10px";
    corpoPagina.appendChild(divLinha);
}