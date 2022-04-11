
import cipher from './cipher.js';

document.getElementById("btn3").addEventListener("click",
function () {
let text1 = document.getElementById("text1").value;
let shift = document.getElementById("shift").value;
// alert(text1);
// alert(shift);
 let resultado =cipher.encode(shift,text1);
// alert(resultado);
document.getElementById("encrypt").value = resultado;
//alert('entro');
});   

//para mayusculas

let text1 = document.getElementById("text1");
text1.addEventListener("keyup", ()=>{
text1.value = text1.value.toUpperCase()
});


// funcion para verificar que el texto está entrando

// let verify = document.getElementById("btn3");
// verify.addEventListener("click", ()=>{

