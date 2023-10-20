const socket = io('http://localhost:4000');

const form = document.getElementsByClassName('formsub');
const messageInp = document.getElementsById('messageinp');
const messageCon = document.querySelector('.container');


const userName = prompt("Enter your name to join")
socket.emit('new user joined', userName);