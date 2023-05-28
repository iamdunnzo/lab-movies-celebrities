const router = require("express").Router();

// Define your celebrity routes here

router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
  });

  router.post("/create", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
  
    const celebrity = new Celebrity({
      name,
      occupation,
      catchPhrase,
    });
  
    celebrity.save()
      .then(() => {
        res.redirect("/celebrities");
      })
      .catch((error) => {
        res.render("celebrities/new-celebrity", { error });
      });
  });
  
  router.get("/", (req, res) => {
    Celebrity.find()
      .then((celebrities) => {
        res.render("celebrities/celebrities", { celebrities });
      })
      .catch((error) => {
        // Handle the error
      });
  });
  

module.exports = router;
