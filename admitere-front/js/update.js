window.onload = function () {

  wsConnection();

};

let wsConnection = function () {

  let socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('connected');

    $("#updateButton").unbind("click");
    $("#updateButton").click(function () {
      let increment = document.getElementById('increment').value;
      axios.post('http://localhost:3000/contestant/addContestant',
          {increase: increment})
      .then(() => {
        socket.emit('receive', 'dalala')
      });

    });

    socket.on('update', (data) => {
      document.getElementById('nr').innerHTML = '<h2>' + data[2]
          + '</h2>';
    });

  });

};

let incrementSet = function (element) {

  document.getElementById("increment").value = element.innerText;

};

let increment = function () {

  document.getElementById("increment").value = parseInt(
      document.getElementById("increment").value) + 1;

};

let decrement = function () {

  document.getElementById("increment").value = parseInt(
      document.getElementById("increment").value) - 1;

};