const fs = require("fs");
const color = require("colors");

const tablaMultiplicar = (base, list, hasta) => {
  let tabla = "";
  let consola = "";
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= hasta; i++) {
      tabla = tabla + `${base} X ${i} = ${base * i}\n`;
      consola =
        consola +
        `${color.yellow(`${base}`)} ${color.bold("X")} ${color.yellow(
          `${i}`
        )} = ${base * i}\n`;
    }
    if (list) {
      console.log(color.blue("=========================="));
      console.log(`    TABLA DEL  ${color.yellow(`${base}`)}   `);
      console.log(color.blue("=========================="));

      console.log(consola);
    }

    resolve(`Tabla del ${base}.text`);

    reject("No se pudo crear ");

    fs.writeFileSync(`./salida/Tabla del ${base}.txt`, tabla, () => {
      console.log("creado");
    });
  });
};

module.exports = {
  tablaMultiplicar,
};
