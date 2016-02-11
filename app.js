var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
  // need to pass in a path to the file.
});
// listen on the connection event for incoming sockets
// log it to the console.
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// we make the http server listen on port 3000
http.listen(3000, function () {
  console.log("Listening on localhost:3000");
});