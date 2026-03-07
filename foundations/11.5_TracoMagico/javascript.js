

const corpoPagina = document.querySelector("#corpoPagina");
corpoPagina.style.display = "flex";

const div1 = document.createElement("div");
div1.style.backgroundColor = "blue";

const div2 = document.createElement("div");
div2.style.backgroundColor = "black";

corpoPagina.appendChild(div1);
corpoPagina.appendChild(div2);

const juntaDivs = corpoPagina.querySelectorAll("div");
juntaDivs.forEach(item => {
    item.style.height= "16px";
    item.style.width = "16px";
});