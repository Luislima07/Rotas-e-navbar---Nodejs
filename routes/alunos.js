const express = require("express");
const router = express.Router();

//Rotas

//Form Add categoria
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Alunos",
        view: "categorias/add",
    });
});

//Form Editar categoria
router.get("/edit", async (req, res) => {
    res.render("base", {
        title: "Editar Alunos",
        view: "categorias/edit",
    });
});

//Listar categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar Alunos",
        view: "categorias/show",
    });
});

module.exports = router;