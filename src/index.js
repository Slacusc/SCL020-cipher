import cipher from './cipher.js';

console.log(cipher);

let Btn = document.getElementById("Btn");
Btn.addEventListener("click", start);

  function start() {
    alert("Cuidado con lo que deseas, viajero.")
    window.location="Cipher.html";

    }


    

    
// let text1 = document.getElementById("text1");
// text1.addEventListener("keyup", ()=>{
// text1.value = text1.value.toUpperCase()
// });