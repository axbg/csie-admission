window.onload = function () {

  axios.get(backURL + "/")
    .then((result) => {
      wsConnection();
      document.getElementById("main-container").innerHTML = content;
    }).catch((err) => {
      window.location.href = "user-login-admitere-2018.html";
    });

  document.getElementById("main-container").innerHTML = content;

};

let wsConnection = function () {

  let socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('connected');

    $("#updateButton").unbind("click");
    $("#updateButton").click(function () {
      let increment = document.getElementById('increment').value;
      let params = new URLSearchParams();

      params.append('increase', increment);

      axios.post(backURL + '/contestant/addContestant',
        params, { withCredentials: true })
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