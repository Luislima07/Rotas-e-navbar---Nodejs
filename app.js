const express = require("express"); 
const path = require("path"); 
const app = express(); 

// Configuração do EJS como view engine 
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 
app.use(express.static("public"))
// Rota principal 
const indexRouter = require("./routes/index"); 
app.use("/", indexRouter); 
// Rotas para categorias e produtos 
const categoriaRouter = require("./routes/categorias"); 
app.use("/categorias", categoriaRouter); 

const categoriaCursos = require("./routes/cursos");
app.use("/cursos", categoriaCursos);

const categoriaAlunos = require("./routes/alunos");
app.use("/alunos", categoriaAlunos);

const categoriaEquipe = require("./routes/equipe");
app.use("/equipe", categoriaEquipe);

// Iniciar o servidor e sincronizar com o banco de dados 
app.listen(3000, () => {
console.log("Servidor em execução na porta 3000"); 
}); 