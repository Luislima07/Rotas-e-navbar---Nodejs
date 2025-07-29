const express = require("express");
const router = express.Router();

//Rotas

//Form Add categoria
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Cursos",
        view: "categorias/add",
    });
});

//Form Editar categoria
router.get("/edit", async (req, res) => {
    res.render("base", {
        title: "Editar Cursos",
        view: "categorias/edit",
    });
});

//Listar categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar Cursos",
        view: "categorias/show",
    });
});

module.exports = router;