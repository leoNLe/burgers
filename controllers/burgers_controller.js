const burgerModel = require("../models/burger");
const router = require("express").Router();

console.log(burgerModel);
router.post("/api/eaten", (req, res) => {
  const id = req.body.id;
  burgerModel.devoured(id);

  res.redirect("/index");
});

router.post("/api/add", (req, res) => {
  const newBurger = req.body.name;
  burgerModel.newBurger(newBurger);

  res.redirect("/index");
});

router.get("/index", async (req, res) => {
  try {
    const allBurgers = await burgerModel.getAllBurgers();
    const burgersLeft = allBurgers.filter((burger) => !burger.devoured);
    const devoured = allBurgers.filter((burger) => burger.devoured);
    res.render("index", {
      burgers: burgersLeft,
      devoured,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
