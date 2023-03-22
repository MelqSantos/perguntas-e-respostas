const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Comfiguração para usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Traduz os dados do formulário
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvar", (req, res) => {
    var titulo = req.body.titulo;
    var desc = req.body.desc;
    res.send(`Formulário recebido! titulo: ${titulo} descricao: ${desc}`)
});


app.listen(8080, () => {
    console.log("Servidor rodando!");
})