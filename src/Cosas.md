 
let original = document.getElementById("original").addEventListener("keyup";
function(){
let original = document.getElementById("original").value.toUppercase();
document.getElementById("original").value = original;
);
console.log(original);
}


document.getElementById("text1").addEventListener("keyup",
function (){
let text1 = document.getElementById("text1").value.toUppercase();
document.getElementById("text1").value = text1;
}
);


const cipher = encode()
function()
  

  //   function Correcto() {
//     alert("Cuidado con lo que deseas, viajero.")
//     window.location="Cipher.html";



//let Btn3 = document.getElementById("btn3");
//Btn3.addEventListener("click", ()=>{
//  console.log("ok");
//});

// let colors=["red","blue","green"];
// for (let i = 0; i < colors.length; i++) { 
//   console.log(colors[i]);
// }

//archivo index.js

        //PASO 1: Obtener número de desplazamiento (offset/key/llave), guardárlo en una varible y convertirlo a entero (parseInt). (Pasarlo como parámetro al objeto window.cipher)

        const offset = document.getElementById('offset-box').value;
        //console.log(key);

        //PASO 2: Obtener la cadena/string del texto a cifrar y convertirlo a mayúscula.(Pasarlo como parámetro al objeto window.cipher)
        let string = document.getElementById('decodex-string').value;
        //console.log(codexString);

    encode: (offset, string) => {
        let result; la string entra d euna forma y sale de otra, la info se guarda en result (existe en mi variable, es temporal).

        //PASO 3: Iterar sobre la palabra para saber cuantas letras cifraremos
        for (let i= 0; i<(string.length); i++) {
            i: indicador de donde parto.
            //PASO 3.1: Saber cuál es la posición ascci para c/letra que se recorre
            let asciiPosition = string.charCodeAt(i);
            indicador para saber que numero o posicion está la letra, esto se guarda en esta variable.
            //console.log('asciiPosition');

            /*PASO 3.2: Aplicar fórmula al texto ascci para saber cual es la nueva posición (x -65 + n) % 26 +65*/
            let enCodexString = (asciiPosition-65 + offset) %26 + 65;

            //PASO 3.3: Teniendo la posición definitiva de cifrado, transformar a alfabeto y guardarlo en una variable
            result += String.fromCharCode(enCodexString);
            +=  concatena y une el resultado asi no se pierde el progreso
        }
        return result;
    }
};

+=  concatena y une el resultado asi no se pierde el progreso

//PASO 4: Imprimir resultado en el input correspondiente
        //document.getElementById(encodex-string).value.innerHTML= window.cipher.encode();



        encode(text1,shift){
let encrypt = "";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i= 0; i<(text1.length); i++){
  let position=alphabet.indexOf(text1[i]);
  let positionAscii = alphabet.charCodeAt(position);
  let calculation = (positionAscii-65+shift)%26+65;
  let result = String.fromCharCode(calculation);
  encrypt+=result;
}
return encrypt;
}



    
    // if (resultado == "St hwjfx vzj xfgjx ytit");

//   function Correcto() {
//     alert("Cuidado con lo que deseas, viajero.")
//     window.location="Cipher.html";


// imput.value = resultado 
//let Btn3 = document.getElementById("btn3");
//Btn3.addEventListener("click", ()=>{
//  console.log("ok");
//});

// let colors=["red","blue","green"];
// for (let i = 0; i < colors.length; i++) { 
//   console.log(colors[i]);
// }