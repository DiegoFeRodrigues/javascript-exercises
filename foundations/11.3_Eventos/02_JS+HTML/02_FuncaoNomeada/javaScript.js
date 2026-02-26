
function funcaoAlerta() {
    alert("Você clicou em um botão com função nomeada no método 2!!!")
}

const botao = document.querySelector("#botao");

botao.onclick = funcaoAlerta;
