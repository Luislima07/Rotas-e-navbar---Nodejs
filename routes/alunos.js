const express = require("express");
const router = express.Router();

//Rotas

//Form Add alunos
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Alunos",
        view: "alunos/add",
    });
});

//Form Editar alunos
router.get("/edit", async (req, res) => {
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit",
    });
});

//Listar alunos
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar Alunos",
        view: "alunos/show",
    });
});

module.exports = router;