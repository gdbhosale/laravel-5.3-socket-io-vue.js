var server = require('http').Server();
var io = require('socket.io')(server);
var Redis = require('ioredis');

var redis = new Redis();

redis.subscribe('private-test-channel');

redis.on('message', function(channel, message) {
    console.log(channel, message);
    event = JSON.parse(message);

    io.emit(event.event, channel, event.data);
});

server.listen(3005);