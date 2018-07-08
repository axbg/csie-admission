
window.onload = () => {
  upload();
};

let upload = function(){

  let socket = io('http://localhost:3000');

  socket.on('connect', () => {

    socket.on('update', (data) => {
      document.getElementById('content').innerHTML = '<h1>' + data + '</h1>';
    });

  });

};
