const orm = require("../config/orm");

const burgerModel = {
  newBurger: async (name) => {
    try {
      const returned = await orm.insertOne("burgers", "burger_name", name);
      console.log(returned);
      return returned;
    } catch (err) {
      throw err;
    }
  },
  devoured: async (burger_id) => {
    try {
      return orm.updateOne("burgers", "devoured", 1, "id", burger_id);
    } catch (err) {
      throw err;
    }
  },
  getAllBurgers: async () => {
    try {
      return orm.selectAll("burgers");
    } catch (err) {
      throw err;
    }
  },
};

module.exports = burgerModel;

