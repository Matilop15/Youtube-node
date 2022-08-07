import { start } from './Index.mjs';

document.getElementById('trigger')
    .addEventListener('click', () => {
        document.getElementById('lbl').innerText = "Cargando..."
        start;
    });