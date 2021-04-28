const { tablaMultiplicar } = require("./tabla");
const argv = require("./config/config");

tablaMultiplicar(argv.b, argv.l, argv.h)
  .then((nombreDelArchivo) => {
    console.log("Archivo creadob " + nombreDelArchivo);
  })
  .catch((err) => {
    console.log(err);
  });
