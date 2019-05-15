
//var electron = require('electron');
//const ipcRenderer  = electron.ipcRenderer;
//const socket = io('http://localhost:3000');

function main()
{
  console.log("Estoy en app.js...")


  //var io = require('socket.io')(http);
  const socket = io('http://localhost:3000');
  //var socket = io();
  //-- Obtener los elementos del interfaz, del DOM
  let send = document.getElementById('send')
  var display = document.getElementById('display')
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
  //socket.emit('nickname', nickname );
  //-- Cuando se aprieta el botón...
  send.onclick = () => {
    socket.emit('new_message', msg.value );
    //-- Sacar un mensaje en la consola
    console.log("Mensaje emitido")
    msg.value = "";
  }
    //-- Añadir la cadena al párrafo
    socket.on('new_message', msg =>{
      display.innerHTML += msg;
    });
    socket.on('welcome', msg =>{
      display.innerHTML += msg;
    });
    socket.on('logout', msg =>{
      display.innerHTML += msg;
    });

}
