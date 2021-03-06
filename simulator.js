const form = document.querySelector("#formSimulator");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#tableBody");
const showForm = document.querySelector("#showForm");
const showTable = document.querySelector("#showTable");
const cleanTable = document.querySelector("#cleanTable");
const hiddenTable = document.querySelector("#hiddenTable");
let socialRecord = [];
const cantidadMujeres = document.querySelector("#cantidadMujeres");
const cantidadHombres = document.querySelector("#cantidadHombres");
const promedioEdadMujer = document.querySelector("#promedioEdadMujer");
const promedioEdadHombre = document.querySelector("#promedioEdadHombre");
const promedioNoBasica = document.querySelector("#promedioNoBasica");
const promedioNoMedia = document.querySelector("#promedioNoMedia");
const rentaMasBaja = document.querySelector("#rentaMasBaja");
const rentaMasAlta = document.querySelector("#rentaMasAlta");
const promedioRenta = document.querySelector("#promedioRenta");
const datosGenerales = document.querySelector("#datosGenerales");

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
        <td id="tableAge">${social.age} a??os</td>
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

  cantidadMujeres.innerHTML = `cantidad de mujeres: ${
    socialRecord.filter((social) => social.genero === "mujer").length
  }`;
  cantidadHombres.innerHTML = `cantidad de hombres: ${
    socialRecord.filter((social) => social.genero === "hombre").length
  }`;

  tableBody.innerHTML = template;

  showForm.style.display = "block";
  datosGenerales.style.display = "block";
  form.style.display = "none";
  table.style.display = "block";

  // drawPicture()
});

showForm.addEventListener("click", () => {
  showForm.style = "display:none";
  form.style = "display: block";
});

showTable.addEventListener("click", () => {
  showTable.style = "display:none";
  table.style = "display: block";
  hiddenTable.style = "display: block";
  datosGenerales.style.display = "block";
});

hiddenTable.addEventListener("click", () => {
  showTable.style = "display:block";
  table.style = "display: none";
  hiddenTable.style = "display: none";
  datosGenerales.style.display = "none";
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
      if (!/^[0-9]+[-|???]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
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

  // Uso de la funci??n
  return Fn.validaRut(rut) ? true : false;
}

// function drawPicture(){

//   console.log(socialRecord);

//   // Primero se recupera el objeto canvas a modificar
//   var canvas = document.getElementById('example');

//   // Luego se le indica la forma de trabajar 2D o 3D
//   var context = canvas.getContext('2d');
//   var c = 0;
//   var color1 =['0','100','80','50'];
//   var color2 =['40','40','240','90'];
//   var color3 =['0','0','0','30'];
//   var xrgb="";
//   xrgb="rgb(40,40,240)";

//   // Se comienza a dibujar en el lienzo utilizando objetos
//   // gr??ficos

//   for(y=0;y<4;y++){
//     c = c + 30;
//     xrgb="rgb("+color1[y]+","+color2[y]+","+color3[y]+")";
//     context.fillStyle = xrgb;
//     context.fillRect (100+c, 250, 15, 50); // columna, fila, ancho, largo
//     context.beginPath();
//     context.fill();

//   }

// }

// window.addEventListener("load", () => {
//   drawPicture()
// })
