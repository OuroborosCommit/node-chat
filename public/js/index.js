//Testing the email config on git

	var socket = io();

socket.on('connect', function()  {
	console.log('Connected to the server');
});

socket.on('disconnect', function() {
	console.log('Disconnected to the server');
});

socket.on('newMessage', function (message) {
	console.log('newMessage',message);
	var li = jQuery('<li></li>');
	li.text(`${message.from} : ${message.text}`);

	jQuery('#messages').append(li);
});



jQuery('#message-form').on('submit', function(e) {
e.preventDefault();
var messageTextbox = jQuery('[name=message]');

socket.emit('createMessage',{
	from : 'User',
	text: messageTextbox.val()
},function() {
messageTextbox.val('')
});

});

