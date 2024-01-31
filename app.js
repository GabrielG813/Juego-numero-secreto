let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto ('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarElementoTexto ('p', 'El número secreto es menor');
        } else{
            asignarElementoTexto ('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }   
    return;

}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numbers
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p', 'Ya se sortearon todos los números disponibles');
    }else {

        // Si el número generado está en la  lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }   
}

function condicionesIniciales (){
    asignarElementoTexto('h1', 'Juego del número secreto!');
    asignarElementoTexto ('p', `Adivina el número secreto del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    //limpiar mensaje de inicio
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condicionesIniciales();
