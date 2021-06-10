const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/cursos", (req,res) => {
  const cursos = [
    "Sistemas de Informação",
    "Engenharia de computação",
    "Computação em nuvem",
    "Inteligência articial",
    "Análise e desenvolvimento de sistemas",
    "Gestão da tecnologia da informação",
    "Defesa cibernética",
  ];

  res.send(cursos);
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3333...");
});
