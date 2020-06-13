const data = {
  name: "Product",
  productList: ["Beer", "Rice"],
  printAllProducts() {
    this.productList.forEach(
      function (product) {
        console.log(`${product} from ${this.name}`);
      }
      // (product) => {
      //   console.log(`${product} from ${this.name}`);
      // }
    );
  },
};

data.printAllProducts();