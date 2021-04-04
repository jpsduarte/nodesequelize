const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.urlencoded({ extended: false }));

//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', async (req, res) => {

    const users = await User.findAll();
    res.json(users);
});

app.get('/find/:id', async (req, res) => {
    res.json(await User.findOne({
        where: {
            id: req.params.id
        }
    }));
});

app.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.listen(3000);