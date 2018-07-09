
window.onload = function () {

  document.getElementById("username").focus();

};

let login = function () {

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value !== "" || password.value !== "") {

    let params = new URLSearchParams();
    params.append('username', username.value);
    params.append('password', password.value);

    axios.post(backURL + "/user/login", params,
        {withCredentials: true})
    .then((result) => {
      window.location.href = "update-front.html";
    }).catch((ex) => {
      alert("Credentials are not valid!");
      username.value = "";
      password.value = "";
      username.focus();
    });
  } else {
    alert("Insert credentials");
  }

};