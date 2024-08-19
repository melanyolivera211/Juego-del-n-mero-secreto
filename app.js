    
  let numeroSecreto;
  let intentos;
  let listaNumeroSorteados = [];
  let numeroMaximo = 10;
  
  condicionesIniciales();

  function asignarTextoElemento(elemento, texto){
      let elementoHTML = document.querySelector(elemento);
      elementoHTML.innerHTML = texto;
  }

  function condicionesIniciales(){
      asignarTextoElemento('h1', 'Juego del número secreto');
      asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
      numeroSecreto = generarNumeroAleatorio();
      intentos = 1;
  }

  function generarNumeroAleatorio(){
      let numero;
      do {
          numero = Math.floor(Math.random() * numeroMaximo) + 1;
      } while (listaNumeroSorteados.includes(numero));
      listaNumeroSorteados.push(numero);
      return numero;
  }

  function verificarIntento(){
      let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      if (numeroDeUsuario === numeroSecreto){
          asignarTextoElemento('p', '¡Acertaste el número en ' + intentos + (intentos === 1 ? ' vez' : ' veces') + '!');
          document.getElementById('reiniciar').removeAttribute('disabled');
      } else {
          if(numeroDeUsuario > numeroSecreto){
              asignarTextoElemento('p', 'El número es menor');
          } else {
              asignarTextoElemento('p', 'El número es mayor');
          }
          intentos++;
          limpiarCaja();
      }
  }
  
  function reiniciarJuego() {
      limpiarCaja();
      condicionesIniciales();
      document.getElementById('reiniciar').setAttribute('disabled', 'true');
  }

  function limpiarCaja(){
      document.getElementById('valorUsuario').value = '';
  }
   
