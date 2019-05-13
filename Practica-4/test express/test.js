var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = [];
var clients2 =[];
var clients_length = 0;
var actual_nick;
var  mensaje;
var nombre;
//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal: /")
});

//--css
app.get('/mi-css.css', function(req, res){
  res.sendFile(__dirname + '/mi-css.css');
});
//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js solicituado")
});

//-- Lanzar el servidor
http.listen(3050, function(){
  console.log('listening on *:3000');
  });



//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');
  clients_length = clients_length + 1;
  socket.on('nickname', nickname => {

    actual_nick = nickname;
    clients += nickname + ',';
    console.log(nickname);
    console.log("1 "+clients);
    //console.log(actual_nick);
    //nombre = clients.split(",")[0]
    //clients2 += nombre;
    //console.log(nombre);
    //console.log(clients2);
  //  console.log(clients);
    io.emit('clients', clients)
    //-- Detectar si el usuario se ha desconectado
    socket.on('disconnect', function(){
      clients_length = clients_length - 1;
      clients -= nickname + ',';
      console.log('--> Usuario Desconectado');
      });
    });
    console.log(clients);
  //console.log(actual_nick);
  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    var comando = msg.split(':')[1];
    console.log(comando);
    if (comando ==' /help'){
      console.log("me solicitan /help");
      var mss = '/help: Mostrará una lista con todos los comandos soportados' + '<br>' +
      '/list: Devolverá el número de usuarios conectados' + '<br>' +
      '/hello: El servidor nos devolverá el saludo' + '<br>' +
      '/date: Nos devolverá la fecha' + '<br>'
      socket.emit('new_message', mss);
    }else if (comando == ' /list') {
        console.log("me solicitan /list");
        var mss = 'SERVER =>usuarios activos: ' + clients+ '<br>';
         socket.emit('new_message', mss);
    }else if (comando == ' /hello') {
        console.log("me solicitan /hello ");
        var mss = 'SERVER => hello ' + actual_nick + '<br>';
        socket.emit('new_message', mss);
    }else if (comando == ' /date') {
      console.log("me solicitan /date");
        var fecha= new Date();
        var mss = 'Fecha: Dia/Mes/año => ' + fecha.getDate()
              + '/' + (fecha.getMonth() +1 )
              + '/' + fecha.getFullYear()
              + '<br> Hora:Minutos:segundos => ' + fecha.getHours()
            //  + '<br> Hora UTC: ' + fecha.getUTCHours()
              + ':' + fecha.getMinutes()
              + ':' + fecha.getSeconds() + '<br>';
        socket.emit('new_message', mss);
    }else {
        console.log("entro");
        var mss = actual_nick + msg + '<br>';
        io.emit('new_message',  mss);
    }

    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido de " + mss)
    //var mss = actual_nick + msg + '<br>';
    //-- Emitir un mensaje a todos los clientes conectados
    });
});
