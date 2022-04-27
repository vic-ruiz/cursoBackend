const Container = require("./container");

const container = new Container("./products.txt");
const productsArray = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
];

function main() {
  container.createFile();
  saveAllProducts();
  getAllProducts();
  getProductById();
  deleteProductById();
  endApp();
}

function saveAllProducts() {
  productsArray.map((product) => {
    container.save(product);
  });
  console.log("The products have been saved");
}

function getAllProducts() {
  const data = container.getAll();
  console.log("Products", data);
}

function getProductById() {
  const productSelected = container.getById(1);
  console.log(`Product with ID: ${productSelected.id}`, productSelected);
}

function deleteProductById() {
  console.log("Deleting product with ID : 2 ");
  container.deleteById(2);
  console.log(`Products left in ${container.filePath}`);
  getAllProducts();
}

function endApp() {
  container.deleteAll();
  console.log(`Finally we delete all the products in ${container.filePath}`);
}

main();
