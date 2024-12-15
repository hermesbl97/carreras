import axios from "axios";

window.addRace = function () {
    const Competition = document.getElementById('Competition').value;
    const Edition = document.getElementById('Edition').value;
    const Distance = document.getElementById('Distance').value;
    const Date = document.getElementById('Date').value;
    const Last_Winner = document.getElementById('Last_Winner').value;

    if (Competition=== ''){
        alert('El nombre de la competición es un campo obligatorio');
        return;
    }

    axios.post('http://localhost:8080/carreras', {
        Competition: Competition,
        Edition: Edition,
        Distance: Distance,
        Date: Date,
        Last_Winner: Last_Winner
    });
};