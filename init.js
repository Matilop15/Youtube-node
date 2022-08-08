const { start } = require('./Index.js');


document.getElementById('trigger')
    .addEventListener('click', () => {
        document.getElementById('lbl').innerText = "Cargando..."
        start();
    });