const { start } = require('./Index.mjs');


document.getElementById('trigger')
    .addEventListener('click', () => {
        document.getElementById('lbl').innerText = "Cargando..."
        start;
    });