const electron = require('electron')
const  ipcMain  = electron.ipcMain;
const io = require('socket.io-client');
const socket = io('http://localhost:3000');
console.log("Arrancando electron...")


//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
  console.log("Evento Ready!")

  // Crear la ventana principal de nuestra Interfaz Gráfica
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })

  //-- En la parte superior se nos ha creado el menu
  //-- por defecto
  //-- Si lo queremos quitar, hay que añadir esta línea
  //win.setMenuBarVisibility(false)

  //-- Cargar la interfaz gráfica, que se encuentra en el
  //-- fichero index.html
  win.loadFile('index.html')

  win.webContents.once('dom-ready', () => {


     socket.on('welcome', msg => {
       win.webContents.send('welcome', msg);
     });

     socket.on('logout', msg => {
       win.webContents.send('logout', msg);
     });


     socket.on('new_message', msg => {
       win.webContents.send('new_message', msg);
     });

     ipcMain.on('send_msg', (event,payload) =>{
      socket.emit('new_message', payload);
     })
 })
})
