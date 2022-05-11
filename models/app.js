const express = require("express");  // importa o express usando a funão require do node

const app = express();   //inicializar o servido que esta contido em um objeto, usando o app para fazer alterções

app.get("/", (requisisao, resposta)=>{
    resposta.send("Olá mundo");
})


app.listen(3000, ()=> console.log("servido rodando na porta 3000"));  //porta do servido, usando uma callback para ter uma respota visual 


//comando:
// npm init -y          => usado para criar um package.json nessesario para baixar/instalar o Express
// npm install express  => usado para baixar o pacote Express
// node app.js          => iniciar o servidor