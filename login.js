let user = "";
let password = "";
const form = document.querySelector("#form");
let errors = {}
let userData = {}

function obtenerDatos(){

 user = document.getElementById("user").value.toLowerCase();
 password = document.getElementById("password").value;

 if(user != "admin"){
    errors.user = "El usuario ingresado es incorrecto"
 }

 console.log(password)

 if(password != "000111"){
     errors.password = "El password es incorrecto"
 } 

console.log(errors)

console.log(Object.keys(errors).length)
    
}

var input = document.getElementsByTagName("INPUT");

for (i=0; i<input.length; i++) {
 input[i].addEventListener("change",  function(){
  resultados = obtenerDatos();
  console.log(resultados);
 });
};


form.addEventListener("submit", () => {

   

    window.location.replace("prinicipal.html")
    console.log("enviando...")
})
