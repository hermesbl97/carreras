const express = require ('express');   
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

const carreras = [
    {
        'competicion': 'Maratón de Zaragoza',
        'edicion': 'XVIII',
        'fecha': '06.04.2025',
        'distancia': 42
    },
    {
        'competicion': 'Carrera del Ebro',
        'edicion': 'XVII',
        'fecha': '16.02.2025',
        'distancia': 25 
    },
    {
        'competicion': 'San Silvestre Zaragoza',
        'edicion': 'XX',
        'fecha': '31.12.2025',
        'distancia': 5
    }
];

app.get('/carreras', (req, res) => {
    res.json(carreras);
});

app.get('/carreras/:competicion', (req, res) => {

});

app.listen(8080, () => {
    console.log("El backend ha iniciado en el puerto 8080"); 
})