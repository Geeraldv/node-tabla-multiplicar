const argv = require("yargs")
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Limite de la tabla",
  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    demandOption: true,
    describe: "Esto muestra la lista de mi APP",
  })

  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Muestra la base que se va a multiplicar ",
  })

  .check((argv) => {
    if (isNaN(argv.b)) {
      console.log("Eso no procede");
    }
    return true;
  }).argv;

module.exports = argv;
