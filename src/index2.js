import cipher from './cipher.js';

document.getElementById("btn3").addEventListener("click",
function () {
let text1 = document.getElementById("text1").value;
let shift = parseInt(document.getElementById("shift").value);
// parseint es para transformar a numero.
// alert(text1);
// alert(shift);
console.log(typeof shift)
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


document.getElementById("btn4").addEventListener("click",
function () {
let text2 = document.getElementById("text2").value;
let shift2 = parseInt(document.getElementById("shift2").value);
 let resultado =cipher.decode(shift2,text2);
// alert(resultado);
document.getElementById("encrypt2").value = resultado;

});

let text2 = document.getElementById("text2");
text2.addEventListener("keyup", ()=>{
text2.value = text2.value.toUpperCase()
});



// funcion para verificar que el texto está entrando

// let verify = document.getElementById("btn3");
// verify.addEventListener("click", ()=>{
