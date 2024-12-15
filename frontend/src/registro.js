import axios from 'axios';
import { notifyError, notifySuccess} from './notifications.js';

window.addRace = function () {
    const Competition = document.getElementById('Competition').value;
    const Edition = document.getElementById('Edition').value;
    const Distance = document.getElementById('Distance').value;
    const Date = document.getElementById('Date').value;
    const Last_Winner = document.getElementById('Last_Winner').value;

    if (Competition === '') {
        notifyError('El nombre de la competición es un campo obligatorio');

        return;
    }

    axios.post('http://localhost:8080/carreras', {
        Competition: Competition,
        Edition: Edition,
        Distance: Distance,
        Date: Date,
        Last_Winner: Last_Winner
    });

    notifySuccess('La película ha sido registrada correctamente');

    document.getElementById('Competition').value = '';
    document.getElementById('Edition').value = '';
    document.getElementById('Distance').value = '';
    document.getElementById('Date').value = '';
    document.getElementById('Last_Winner').value = '';
};