import axios from 'axios';
import { icon, td } from './easyCode';

window.obtainCarreras = function () {
    axios.get('http://localhost:8080/carreras')
        .then((response) => {
            const carrerasList = response.data;
            const carrerasTable = document.getElementById('tableBody');
            
            carrerasList.forEach(carrera => {
                const row = document.createElement('tr');
                row.innerHTML =  td(carrera.Competition) +
                                 td(carrera.Edition) +
                                 td(carrera.Distance) +
                                 td(carrera.Date) +
                                 td(carrera.Last_Winner);   
                carrerasTable.appendChild(row);                              
            })
        });
    }