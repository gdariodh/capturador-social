const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  user = document.getElementById("user").value.toLowerCase();
  password = document.getElementById("password").value.toLowerCase();

  if (user === "admin" && password === "000111") {
    window.location.assign("./principal.html");
  } else {
    alert("El usuario o la password estan incorrectos");
  }
});
