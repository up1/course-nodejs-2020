const yargs = require("yargs");
const productService = require("./file-service.js");

yargs.version("0.0.1");
yargs.usage("$0 <command> [options]");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new product",
  builder: {
    name: {
      describe: "Product name",
      demandOption: true,
      type: "string",
    },
    price: {
      describe: "Product price",
      demandOption: true,
      type: "number",
      default: "1",
    },
  },
  handler(argv) {
    productService.newProduct(argv.name, argv.price);
  },
});

yargs.parse();
