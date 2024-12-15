const express = require ('express');   
const cors = require ('cors');
const knex = require ('knex');

const app = express();
app.use(cors());
app.use(express.json());

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'carreras.db'
    },
    useNullAsDefault: true
});


app.get('/carreras', async (req, res) => {
    const carreras = await db('carreras').select('*');
    res.json(carreras);
});

app.get('/carreras/:carrerasId', async (req, res) => {
    const carreras = await db('carreras').select('*').where({Id: req.params.carrerasId}).first();
    res.status(200).json(carreras);
});

app.post('/carreras', async (req, res) => {
    await db('carreras').insert({
        Competition: req.body.Competition,
        Edition: req.body.Edition,
        Distance: req.body.Distance,
        Date: req.body.Date,
        Last_Winner: req.body.Last_Winner
    });
    res.status(201).json({});
});

app.put('/carreras/:carrerasId', async (req, res) => {
    await db('carreras').update({
        Competition: req.body.Competition,
        Edition: req.body.Edition,
        Distance: req.body.Distance,
        Date: req.body.Date,
        Last_Winner: req.body.Last_Winner
    }).where({Id: req.params.carrerasId});
    res.status(204).json({});
});

app.delete('/carreras/:carrerasId', async (req, res) => {
    await db('carreras').del().where({Id: req.params.carrerasId});
    res.status(204).json({});
});

app.listen(8080, () => {
    console.log("El backend ha iniciado en el puerto 8080"); 
});