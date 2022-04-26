const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  user = document.getElementById("user").value.toLowerCase();
  password = document.getElementById("password").value;

  if (user === "admin" && password === "000111") {
    window.location.assign("./simulator.html");
  } else if (user === "asistente" && password === "AAA000") {
    window.location.assign("./simulator.html");
  } else {
    alert("El usuario o la password estan incorrectos");
  }
});
