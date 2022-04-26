const form = document.querySelector("#formSimulator");
const table = document.querySelector("#table");
let socialRecord = [];
const showForm = document.querySelector("#showForm");
const showTable = document.querySelector("#showTable");
// const tableName = document.querySelector("#tableName");
// const tableRut = document.querySelector("#tableRut");
// const tableComuna = document.querySelector("#tableComuna");
// const tableAddress = document.querySelector("#tableAddress");
// const tablePhone = document.querySelector("#tablePhone");
// const tableEmail = document.querySelector("#tableEmail");
// const tableBirthday = document.querySelector("#tableBirthday");
// const tableAge = document.querySelector("#tableAge");
// const tableEstatura = document.querySelector("#tableEstatura");
// const tableBasica = document.querySelector("#tableBasica");
// const tableMedia = document.querySelector("#tableMedia");
// const tableJob = document.querySelector("#tableJob");
// const tableAgeJob = document.querySelector("#tableAgeJob");
// const tableRenta = document.querySelector("#tableRenta");

showForm.addEventListener("click", () => {
  showForm.style = "display:none";
  form.style = "display: block";
});

showTable.addEventListener("click", () => {
  showTable.style = "display:none";
  table.style = "display: block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nombre = document.getElementById("name").value.toLowerCase();
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

  let user = {};

  user = {
    nombre,
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

  socialRecord = [...socialRecord, user];

  console.log(socialRecord);

//   socialRecord.map((social) => {
//     tableName.innerHTML = social.nombre;
//     (tableRut.innerHTML = social.rut),
//       (tableComuna.innerHTML = social.comuna),
//       (tableAddress.innerHTML = social.address),
//       (tablePhone.innerHTML = social.phone),
//       (tableEmail.innerHTML = social.email),
//       (tableBirthday.innerHTML = social.birthday),
//       (tableAge.innerHTML = social.age),
//       (tableEstatura.innerHTML = social.estatura),
//       (tableBasica.innerHTML = social.basica),
//       (tableMedia.innerHTML = social.media),
//       (tableJob.innerHTML = social.job),
//       (tableAge.innerHTML = social.ageJob),
//       (tableRenta.innerHTML = social.renta);
//   });

  showForm.style.display = "block";
  form.style.display = "none"; 
  
});
