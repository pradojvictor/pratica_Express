const express = require("express");  // importa o express usando a funão require do node

const app = express();   //inicializar o servido que esta contido em um objeto, usando o app para fazer alterções

const port = 3000;

app.use(express.json());                           // use esse metodo, vc vai receber json e usar json
app.use(express.urlencoded({extended : true}));  

app.get("/products", (req, res)=>{
    res.json([]); 
})

app.post("/products", (req, res)=> {
  res.json(req.body);
})

app.get("/products/:id", (req,res)=>{
  const { id } = req.params;

  res.json({
    id,
    name:`produto ${id}`,
    price: 300,
  })
})

app.put("/products/:id", (req,res)=>{
  const { id } = req.params;

  res.json({
    id,
    ...(req.body || {}),
  })
})

app.delete("/products/:id", (req,res)=>{
  res.status(204).send("")
})

app.get("/:name?", (req, res)=>{
    const { name } = req.params;

    res.send(`hello ${name || "world"}`);
})


app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);  //porta do servido, usando uma callback para ter uma respota visual 
});

 


//comando:
// npm init -y          => usado para criar um package.json nessesario para baixar/instalar o Express
// npm install express  => usado para baixar o pacote Express
// node app.js          => iniciar o servidor

//inicar servido com nodemon => npm run agoravai 
