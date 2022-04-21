const Container = require("./Container");

const container = new Container("productos.txt");

const main = async () => {
  const id1 = await container.save({ title: "Regla", price: 75.66, thumbnail:"Regla.jpg" });
  const id2 = await container.save({ title: "Goma", price: 57.75, thumbnail:"Goma.jpg" });
  const id3 = await container.save({ title: "Lapicera", price: 100, thumbnail:"Lapicera.jpg" });

  console.log(id1, id2, id3);

  const object2 = await container.getById(2);
  console.log(object2); 

  await container.deleteById(2);

  const allCurrentObjects = await container.getAll();
  console.log(allCurrentObjects);

  //await container.deleteAll(); 

};

main();