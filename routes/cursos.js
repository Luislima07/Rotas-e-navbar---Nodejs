const express = require("express");
const router = express.Router();

//Rotas

//Form Add Cursos
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Cursos",
        view: "cursos/add",
    });
});

//Form Editar cursos
router.get("/edit", async (req, res) => {
    res.render("base", {
        title: "Editar Cursos",
        view: "cursos/edit",
    });
});

//Listar cursos
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar Cursos",
        view: "cursos/show",
    });
});

module.exports = router;