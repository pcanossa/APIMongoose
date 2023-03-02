// configuração inicial
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require('./models/User')

//forma de ler JSON - middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

//rotas API
const userRoutes = require('./routes/usersRoutes');

app.use('/user', userRoutes);

//rota inicial - endpoint
app.get('/', (req, res) => {

    //mostrar requisição

    res.json({message: "Oi Express!"});
})

//conexão com o banco de dados
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mshaz5t.mongodb.net/login?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conexão ao Banco de dados realizado com sucesso!");
    app.listen(3000);
})
.catch ((err) => {
    console.log(err)
})

//entregar uma porta





