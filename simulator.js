const form = document.querySelector("#formSimulator");
let socialRecord = [];
const showForm = document.querySelector("#showForm");

showForm.addEventListener("click", () => {
  showForm.style = "display:none";
  form.style = "display: block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  user = document.getElementById("name").value.toLowerCase();
  rut = document.getElementById("rut").value.toLowerCase();
  comuna = document.getElementById("comuna").value.toLowerCase();
  address = document.getElementById("address").value.toLowerCase();
  phone = document.getElementById("phone").value.toLowerCase();
  email = document.getElementById("email").value.toLowerCase();
  birthday = document.getElementById("birthday").value.toLowerCase();
  age = document.getElementById("age").value.toLowerCase();
  estatura = document.getElementById("estatura").value.toLowerCase();
  basica = document.getElementById("basica").value.toLowerCase();
  media = document.getElementById("media").value.toLowerCase();
  job = document.getElementById("job").value.toLowerCase();
  ageJob = document.getElementById("ageJob").value.toLowerCase();
  renta = document.getElementById("renta").value.toLowerCase();

  let table = {};

  table = {
    user,
    rut,
    comuna,
    address,
    phone,
    email,
    birthday,
    age,
    estatura,
    basica,
    media,
    job,
    ageJob,
    renta,
  };

  socialRecord = [...socialRecord, table];
  console.log(socialRecord);
});

