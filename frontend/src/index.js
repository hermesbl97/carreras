import axios from 'axios';

window.obtainCarreras = function () {
    axios.get('http://localhost:8080/carreras')
        .then((response) => {
            const carrerasList = response.data;
            const carrerasUl = document.getElementById('carreras');
            
            carrerasList.forEach(carrera => {
                const li = document.createElement('li');
                li.className = 'list-group-item list-group-item-info';
                li.appendChild(document.createTextNode(carrera.Edition + ' ' + carrera.Competition + ' . ' + ' Tu cita es el ' + carrera.Date + '.  ¡¡¡A por los ' + carrera.Distance + ' kilómetros!!!' + '  Serás capaz de imponerte a ' + carrera.Last_Winner ));
                carrerasUl.appendChild(li);
            })
        });
    }