const form = document.querySelector("#formSimulator");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#tableBody");
let socialRecord = [];
const showForm = document.querySelector("#showForm");
const showTable = document.querySelector("#showTable");
const cleanTable = document.querySelector("#cleanTable");

showForm.addEventListener("click", () => {
  showForm.style = "display:none";
  form.style = "display: block";
});

showTable.addEventListener("click", () => {
  showTable.style = "display:none";
  table.style = "display: block";
});

form.addEventListener("submit", (e) => {
  let errors = {};

  e.preventDefault();

  nombre = document.getElementById("name").value.toLowerCase();
  rut = document.getElementById("rut").value.toLowerCase();
  comuna = document.getElementById("comuna").value.toLowerCase();
  address = document.getElementById("address").value.toLowerCase();
  phone = document.getElementById("phone").value.toLowerCase();
  email = document.getElementById("email").value.toLowerCase();
  birthday = document.getElementById("birthday").value.toLowerCase();

  console.log(birthday);

  age = document.getElementById("age").value.toLowerCase();
  estatura = document.getElementById("estatura").value.toLowerCase();
  basica = document.getElementById("basica").value.toLowerCase();
  media = document.getElementById("media").value.toLowerCase();
  job = document.getElementById("job").value.toLowerCase();
  ageJob = document.getElementById("ageJob").value.toLowerCase();
  renta = document.getElementById("renta").value.toLowerCase();
  genero = document.getElementById("hombre").value;
  genero = document.getElementById("mujer").value;

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
    genero,
  };

  socialRecord = [...socialRecord, user];

  console.log(socialRecord);

  const template = socialRecord.map((social) => {
    return `
   
      <tr>
        <td id="tableName">${social.nombre}</td>
        <td id="tableRut">${social.rut}</td>
        <td id="tableComuna">${social.comuna}</td>
        <td id="tableAddress">${social.address}</td>
        <td id="tablePhone">${social.phone}</td>
        <td id="tableEmail">${social.email}</td>
        <td id="tableBirthday">${social.birthday}</td>
        <td id="tableAge">${social.age}</td>
        <td id="tableEstatura">${social.estatura}</td>
        <td id="tableBasica">${social.basica}</td>
        <td id="tableMedia">${social.media}</td>
        <td id="tableJob">${social.job}</td>
        <td id="tableAgeJob">${social.ageJob}</td>
        <td id="tableRenta">${social.renta}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = template;

  showForm.style.display = "block";
  form.style.display = "none";
  table.style.display = "block";
});

cleanTable.addEventListener("click", () => {
  console.log({ cleanded: socialRecord });

  window.location.reload();
});
