const fs = require("fs");

class Container {
  constructor(filePath) {
    this.filePath = filePath;
  }
  async getAll() {
    const information = await fs.promises.readFile(this.filePath);
    const data = JSON.parse(information);
    return data;
  }

  async save(object) {
    try {
      const data = await this.getAll();
      if (data.length == 0) {
        object.id = 1;
      } else {
        let allId = data.map((e) => e.id);
        object.id = Math.max(...allId) + 1;
      }

      data.push(object);

      await fs.promises.writeFile(this.filePath, JSON.stringify(data));
      return object.id;
    } catch (error) {
      console.log(`Error : ${error.code}`);
    }
  }

  async getById(id) {
    try {
      const data = await this.getAll();
      return data.find((producto) => producto.id === id);
    } catch (error) {
      console.log(`Error Code: ${error.code})`);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.filePath, "[]");
    } catch (error) {
      console.log(`Error Code (${error.code})`);
    }
  }

  async deleteById(id) {
    try {
      const data = await this.getAll();
      const objectIdToBeRemoved = data.find((producto) => producto.id === id);

      if (objectIdToBeRemoved) {
        const index = data.indexOf(objectIdToBeRemoved);
        data.splice(index, 1);
        await fs.promises.writeFile(this.filePath, JSON.stringify(data));
      } else {
        console.log(`ID ${id} does not exist in the file`);
        return null;
      }
    } catch (error) {
      console.log(`Error Code: ${error.code}`);
    }
  }
}

module.exports = Container;
