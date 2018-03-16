	var socket = io();

socket.on('connect', function()  {
	console.log('Connected to the server');
	socket.emit('createEmail', {
		to:"jen",
		text:'Hey this is me'

	});
});

socket.on('disconnect', function() {
	console.log('Disconnected to the server');
});

socket.on('newEmail', function (email) {
	console.log('New email',email);
});