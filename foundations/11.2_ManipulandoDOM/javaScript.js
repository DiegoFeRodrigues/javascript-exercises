
/* 
Criando e alterando propriedades de elementos no DOM

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

1 - a <p> with red text that says “Hey I’m red!”
2 - an <h3> with blue text that says “I’m a blue h3!”
3 - a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const corpoPagina = document.querySelector("#corpo");

const paragrafoVermelho = document.createElement("p");
paragrafoVermelho.classList.add("redPara");
paragrafoVermelho.textContent = "Parágrafo em vermelho."
paragrafoVermelho.style.color = "red";
corpoPagina.appendChild(paragrafoVermelho);

const tituloH3 = document.createElement("h3");
tituloH3.classList.add("tituloH3");
tituloH3.textContent = "Título h3 em azul.";
tituloH3.style.color = "#0202f6";
corpoPagina.appendChild(tituloH3);

const divConteudo = document.createElement("div");
divConteudo.classList.add("divConteudo");
divConteudo.style.border = "2px solid black";
divConteudo.style["background-color"] = "pink";
corpoPagina.appendChild(divConteudo);