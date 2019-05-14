function main() {
  console.log("Hola!!!!-------------")
  var nickname = prompt("inserte su nick");
  //-- Crear el websocket
  var socket = io();

  //-- Obtener los elementos de interfaz:

  //-- Boton de envio de mensaje
  var send = document.getElementById('send')

  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  msg.addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("send").click();
    }
  });
  socket.emit('nickname', nickname );
  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {
    //socket.emit('nickname', nickname );
    //-- Enviar el mensaje, con el evento "new_message"
    socket.emit('new_message', nickname + ": " + msg.value );

    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje emitido")
    msg.value = ""
  }
  socket.on('welcome', welcome => {
    display.innerHTML += welcome + '<br>'
  });
  socket.on('logout', logout => {
    display.innerHTML += logout + '<br>'
  });
  //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo
  socket.on('new_message', msg => {
    display.innerHTML +=  msg;
  });

}
