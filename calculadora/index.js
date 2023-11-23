const displayValoranterior = document.getElementById('valor-aterior')
const displayValoractual = document.getElementById('valor-actual')
const botonesnumeros = document.querySelectorAll('.numeros')
const botonesoperadores = documente.querySelectorAll('.operadores')

const display = new Display(displayvaloranterior. displayvaloractual);


bonotesNumeros.forEach(boton=> {
    boton.addEventlistener('click'. () => display.agregarnumero(boton.innerhtml);
    });