var express = require('express'),
  layout = require('express-layout'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server)

app.use(layout());
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(3000, function () {
  console.log('Server up and listening on port 3000!');
});