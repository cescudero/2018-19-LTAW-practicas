
var electron = require('electron');
const ipcRenderer  = electron.ipcRenderer;
function main()
{
  console.log("Estoy en app.js...")
  //var socket = io();
  //-- Obtener los elementos del interfaz, del DOM
  let button = document.getElementById('button')
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
  //-- Cuando se aprieta el botón...
  button.onclick = () => {
    ipcRenderer.send('new_message', ": " + msg.value );
    //-- Sacar un mensaje en la consola
    console.log("Mensaje emitido")
    //-- Añadir la cadena al párrafo
    ipcRenderer.on('new_message', msg =>{
      display.innerHTML += msg;
    });
  }

}
