import cipher from "./cipher.js";

let Btn = document.getElementById("Btn");
if(Btn){
Btn.addEventListener("click", start);
  function start() {
    alert("Cuidado con lo que deseas, viajero.")
    window.location="Cipher.html";

}
};

//para mayusculas cuando se ingrese a texto

let text1 = document.getElementById("text1");
if(text1){
text1.addEventListener("keyup", () => {
  text1.value = text1.value.toUpperCase();
})};


document.getElementById("btn3").addEventListener("click", function () {
  let text1 = document.getElementById("text1").value;
  let shift = parseInt(document.getElementById("shift").value);
  let resultado = cipher.encode(shift, text1);
  document.getElementById("encrypt").value = resultado;

  //shift correcto: 2

  if (resultado == "PQ RWGFGU UCNKT") {
    alert(
      "NO CREAS QUE PODRÁS ESCAPAR, INTENTA CODIFICAR LA SEGUNDA FRASE OCULTA EN LAS INSTRUCCIONES"
    );
  } else
    alert("WARNING");
  });
  

document.getElementById("btn4").addEventListener("click", function () {
  let text2 = document.getElementById("text2").value;
  let shift2 = parseInt(document.getElementById("shift2").value);
  let resultado = cipher.decode(shift2, text2);
  // alert(resultado);
  document.getElementById("encrypt2").value = resultado;
  // decodificar "DGLRV" shift 3
  if (resultado == "ADIOS") {
    alert("UNA VICTORIA NO ES NADA, NOS VEMOS EN LA SIGUIENTE PRUEBA, HUMANO")
    window.location = "win.html"  
    
  }else { 
  alert("ADIOS HUMANO")
  window.location="GAMEOVER.html";
}});
<<<<<<< HEAD
=======

>>>>>>> inicio1
//para mayusculas cuando se ingrese a texto

let text2 = document.getElementById("text2");
text2.addEventListener("keyup", () => {
  text2.value = text2.value.toUpperCase();
});

// funcion para verificar que el texto está entrando

// let verify = document.getElementById("btn3");
// verify.addEventListener("click", ()=>{
// let text1 = document.getElementById("text1");
// text1.addEventListener("keyup", ()=>{
// text1.value = text1.value.toUpperCase()
// });

let Btn6 = document.getElementById("Btn6");
if(Btn6){
Btn6.addEventListener("click", restart);
    function restart(){
      window.location="index.html";
}
};
//boton bonus




// let bonus = document.getElementById("fortaleza");
// if(fortaleza){
// fortaleza.addEventListener("click", () => {
//   selectedPokemon.resistant.forEach(tipo => pokemonfortaleza = filtrartipos(tipo))
//   let img = document.getElementById("pokepoke");
//   img.src = selectedPokemon.img;
//   img.classList.add("show");
//   document.getElementById("number").innerHTML = `<p class="hola mauri" > Número ${selectedPokemon.num} - ${selectedPokemon.name}</p>`;
//   });
// }

