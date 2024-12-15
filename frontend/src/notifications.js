import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const notifyError = function(message) {
    Toastify({
        text: message,
        duration: 6000,
        gravity: 'top',
        position: "center", 
        style: {
            background: "red",
        }
    }).showToast(); 
};

const notifySuccess = function (message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: "left", 
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
};

module.exports ={
    notifyError,
    notifySuccess
};

