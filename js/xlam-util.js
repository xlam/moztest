/*globals document */

var element = document.getElementById('output');

function w(msg, data) {
    element.innerHTML = element.innerHTML +
                        '[' + msg + '] ' +
                        '<strong>' + data + '</strong><br>';
}

