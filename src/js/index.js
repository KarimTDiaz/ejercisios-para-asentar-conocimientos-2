// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { printSelect } from './print-select.js';

const selectElement = document.getElementById('select-theme');

selectElement.addEventListener('change', ev => {
  printSelect(ev.target.value);
});
