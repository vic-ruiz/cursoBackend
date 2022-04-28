const express = require('express')
const app = express();
const PORT = 8080;
app.use(express.json());
const Container = require('./container');

const container = new Container("./products.txt");

app.get('/productos', async (req, res) => {
  const allProducts = await container.getAll();
  res.json(allProducts);
});

app.get('/',(req, res) =>{
  res.send('<h1>Entrega 3</h1> <div>/productos para obtener todos los productos</div> <div>/productoRandom para obtener un producto al azar</div>');
});


app.get('/productoRandom', async (req, res) => {
  const data = await container.getAll()
  const random = Math.floor(Math.random() * data.length)
  res.send(await container.getById(parseInt(random + 1)))
})

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error));
