
// criando elemento com JS:
const corpoPagina = document.querySelector("#corpo"); // seleciona conteiner pai

const botao = document.createElement("button");
botao.textContent = "BOTÃO!!";
/* evento onclick: */
botao.onclick = () => alert("Você clicou no botão!!!");
corpoPagina.appendChild(botao); // acrescenta elemento filho no conteiner pai


/* versão simplificada - Selecionando elemento 
já criado no html e definindo propriedade onclick: */

// const botao = document.querySelector("#botao");
// botao.onclick = () => alert("Você clicou no botão!!!");