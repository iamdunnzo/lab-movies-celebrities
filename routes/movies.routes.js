const router = require("express").Router();

// Define your celebrity routes here

router.get("/create", async (req, res) => {
    try {
      const celebrities = await Celebrity.find();
      res.render("movies/new-movie", { celebrities });
    } catch (error) {
      // Handle the error
    }
  });
  
  router.post("/create", async (req, res) => {
    const { title, genre, plot, cast } = req.body;
  
    try {
      const movie = new Movie({
        title,
        genre,
        plot,
        cast,
      });
  
      await movie.save();
  
      res.redirect("/movies");
    } catch (error) {
      // Handle the error
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const movies = await Movie.find();
      res.render("movies/movies", { movies });
    } catch (error) {
      // Handle the error
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const movie = await Movie.findById(id).populate("cast");
      res.render("movies/movie-details", { movie });
    } catch (error) {
      // Handle the error
    }
  });
  
  
module.exports = router;