module.exports = app => {
    const ingatlanok = require("../controllers/ingatlan.controller")

    var router = require("express").Router();

    router.get("/", ingatlanok.findAll);
    router.post("/", ingatlanok.create);
    router.delete("/:id", ingatlanok.delete)
  
    app.use('/api/ingatlan', router);
}