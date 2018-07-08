
window.onload = () => {
  upload();
};

let upload = function(){

  let socket = io('http://localhost:3000');

  socket.on('connect', () => {

    socket.on('update', (data) => {
      document.getElementById('nr').innerHTML = '<h1 class="counter">' + data[2] + '</h1>';
     document.getElementById('hour').innerHTML = '<h3>Următoarea serie de 10 persoane a intrat la ora ' + data[1] + '</h1>';
	document.getElementById('avg').innerHTML = 'Media de așteptare pentru intrarea unei serii noi este ' + data[0] + ' minute.';
    });

  });

};
