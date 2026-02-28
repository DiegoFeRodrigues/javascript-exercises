
function funcaoAlerta() {
    alert("Você clicou em um botão com função nomeada no método 3!!!")
}

const botao = document.querySelector("#botao");

botao.addEventListener("click", funcaoAlerta);


/* MAIS SOBRE EVENTOS - ANOTAÇÕES / LINKS: */

// imprime detalhes do evento:
botao.addEventListener("click", function (e) {
  console.log(e);
});

botao.addEventListener("click", function (e) {
    console.log(e.type);
});

// exemplo evento mouse:
botao.addEventListener('wheel', e => console.log(e.deltaY));

// W3Schools JavaScript Event Reference page:
//     https://www.w3schools.com/jsref/dom_obj_event.asp

// Funções - callbacks:
    // https://dev.to/i3uckwheat/understanding-callbacks-2o9e

/* Eventos - JavaScript Tutorial:

    Introdução - Event flow, Event bubbling, Event capturing, 
    DOM level 2 Event flow, Event object:
        https://www.javascripttutorial.net/javascript-dom/javascript-events/

    Mouse events:
        https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/

    Event delegation:
        https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/

    Dispatch event:
        https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/

    Custom events:
        https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/

    
*/
