const express = require("express");
const router = express.Router();

//Rotas

//Página inicial
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar Cursos",
        view: "equipe/show",
    });
});


module.exports = router;
