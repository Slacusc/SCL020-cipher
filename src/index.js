import cipher from './cipher.js';

console.log(cipher);

let Btn = document.getElementById("Btn");
Btn.addEventListener("click", Correcto);

function Correcto() {
    alert("Cuidado con lo que deseas, viajero.")
    window.location="Cipher.html";
     
    }