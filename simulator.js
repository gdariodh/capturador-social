const form = document.querySelector("#formSimulator");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#tableBody");
const showForm = document.querySelector("#showForm");
const showTable = document.querySelector("#showTable");
const cleanTable = document.querySelector("#cleanTable");
const hiddenTable = document.querySelector("#hiddenTable");
let socialRecord = [];

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
  age = getAge(birthday);
  estatura = document.getElementById("estatura").value.toLowerCase();
  basica = document.getElementById("basica").value.toLowerCase();
  media = document.getElementById("media").value.toLowerCase();
  job = document.getElementById("job").value.toLowerCase();
  ageJob = document.getElementById("ageJob").value.toLowerCase();
  renta = document.getElementById("renta").value.toLowerCase();
  hombre = document.getElementById("hombre").checked;
  mujer = document.getElementById("mujer").checked;

  if (nombre.trim().length < 5 || nombre.trim().length > 50) {
    errors.nombre = "El nombre debe tener min 5 y max 50 caracteres";

    alert(errors.nombre);

    return;
  }

  if (!validateRut(rut)) {
    errors.rut = "El rut es invalido, formato: XXXXXXXX-X";
    alert(errors.rut);

    return;
  }

  let genero = "";

  if (hombre) {
    genero = "hombre";
  } else if (mujer) {
    genero = "mujer";
  }

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
        <td id="tableAge">${social.age} años</td>
        <td id="tableEstatura">${social.estatura} cm</td>
        <td id="tableBasica">${social.basica}</td>
        <td id="tableMedia">${social.media}</td>
        <td id="tableJob">${social.job}</td>
        <td id="tableAgeJob">${social.ageJob}</td>
        <td id="tableRenta">$${social.renta}</td>
        <td id="tableGenero">${social.genero}</td>

      </tr>
    `;
  });

  tableBody.innerHTML = template;

  showForm.style.display = "block";
  form.style.display = "none";
  table.style.display = "block";
});

showForm.addEventListener("click", () => {
  showForm.style = "display:none";
  form.style = "display: block";
});

showTable.addEventListener("click", () => {
  showTable.style = "display:none";
  table.style = "display: block";
  hiddenTable.style = "display: block";
});

hiddenTable.addEventListener("click", () => {
  showTable.style = "display:block";
  table.style = "display: none";
  hiddenTable.style = "display: none";
});

cleanTable.addEventListener("click", () => {
  socialRecord = [];

  window.location.reload();
});

function getAge(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function validateRut(rut) {
  var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      if (digv == "K") digv = "k";
      return Fn.dv(rut) == digv;
    },
    dv: function (T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  // Uso de la función
  return Fn.validaRut(rut) ? true : false;
}
