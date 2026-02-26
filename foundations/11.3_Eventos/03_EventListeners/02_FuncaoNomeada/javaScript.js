
function funcaoAlerta() {
    alert("Você clicou em um botão com função nomeada no método 3!!!")
}

const botao = document.querySelector("#botao");

botao.addEventListener("click", funcaoAlerta);
