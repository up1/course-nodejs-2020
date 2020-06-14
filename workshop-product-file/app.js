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

// Create list command
yargs.command({
  command: "list",
  describe: "List all products",
  handler(argv) {
    productService.listAll();
  },
});

// Create get by id command
yargs.command({
    command: "get",
    describe: "Add a new product",
    builder: {
      id: {
        describe: "Product ID",
        demandOption: true,
        type: "string",
      }
    },
    handler(argv) {
      productService.getById(argv.id);
    },
  });

yargs.parse();
