const router = require('express').Router();
const User = require('../models/User');

//rotas da API

//create - POST
router.post('/', async (req, res) => {

    //req.body
    const {username, password, credential} = req.body;

    if(!username || !password ) {
        res.status(422).json({message: "É necessário informar o username, password e a credencial!"})
        return
    }

    const user = {
        username,
        password,
        credential
    }

    //create
    try {

        //criando dados
        await User.create(user)

        res.status(201).json({message: 'Usuário criado com sucesso!'});

    } catch (err) {
        res.status(500).json({error: err});
    }



})

//read - GET
router.get('/', async (req, res) => {


    try {

        const user = await User.find();

        res.status(200).json(user);

    } catch (err) {    
        res.status(404).json({ message: 'Não há dados para serem exibidos' });
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {

    //extrair dado pela requisição url
    const id = req.params.id;

    try {

        const user = await User.findOne({_id: id});

        res.status(200).json(user);

    } catch (err) {    
        res.status(404).json({ message: 'Usuário não encontrado' });
        console.log(err);
    }
})

//Update - PUT e PATCH
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const {username, password, credential} = req.body;

    //req.body
    const user = {
        username,
        password,
        credential
    }

    try {const existingUser = await User.findOne({ _id: id });
    } catch (err) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        console.log(err);
        return
    }
    


    try {

        const updateUser = await User.updateOne({_id: id}, user);

            if (updateUser.result.matchedCount === 0) {
            res.status(422).json({message: 'Usuário não encontrado'})
            return
        };

        console.log(updateUser);

        res.status(200).json({message: `Usuário atualizado com sucesso com os dados: ${user.username, user.password, user.credential}`});
    } catch (err) { 
        if (err.error === "CastError") {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(500).json({error: "Erro ocorrido ao atualizar o usuário"});
    
    }

});

//Delete - delete
router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    try {const existingUser = await User.findOne({ _id: id });
    } catch (err) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        console.log(err);
        return
    }

    try {

        const user = await User.deleteOne({_id: id});

        res.status(201).json({message: 'Usuário deletado com sucesso!'});

    } catch (err) {    
        res.status(500).json({error: "Erro ocorrido ao deletar o usuário"});
    }
})

module.exports = router;