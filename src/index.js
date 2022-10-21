import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

console.log('Hola');
console.log('hey')
console.log('sadsa');
(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
