import axios from 'axios';

window.obtainCarreras = function () {
    axios.get('http://localhost:8080/carreras')
        .then((response) => {
            const carrerasList = response.data;
            const carrerasUl = document.getElementById('carreras');
            
            carrerasList.forEach(carrera => {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(carrera.edicion + ' ' + carrera.competicion + ' . ' + 'Tu cita es el ' + carrera.fecha + '. ¡¡¡A por los ' + carrera.distancia + ' kilómetros!!!'  ));
                carrerasUl.appendChild(li);
            })
        });
    }