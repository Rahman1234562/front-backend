

const socket = io('http://localhost:8000');

const form = document.getElementsByClassName('formsub');
const messageInp = document.getElementsById('messageinp');
const messageCon = document.querySelector('container');


const name = prompt("Enter your name to join");
socket.emit('new user joined', name);

const user = prompt('enter your name');
console.log(user);