window.onload = function () {

  wsConnection();

};

let wsConnection = function () {

  let socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('connected');

    $("#updateButton").unbind("click");
    $("#updateButton").click(function () {
      axios.post('http://localhost:3000/contestant/addContestant',
          {increase: 2})
      .then(() => {
        socket.emit('receive', 'dalala')
      });

    })

  });

};