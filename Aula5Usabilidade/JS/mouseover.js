document.getElementById("botao").addEventListener('mouseover', mouseEmCima);
document.getElementById("botao").addEventListener('mouseout', mouseFora);

function mouseEmCima(){
    let elemento = document.getElementById('botao');
    elemento.style.cursor = "hand";
    elemento.style.backgroundColor = "cyan";
    elemento.innerHTML = "mouseover"
}

function mouseFora(){
    let elemento = document.getElementById('botao');
    elemento.style.backgroundColor = "white";
    elemento.innerHTML = "mouseout"
}


