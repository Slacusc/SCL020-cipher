decode: (shift2, text2) => {
  let result = "";
  for (let i= 0; i<(text2.length); i++) {
   // alert('variable i'+i); le pide al proceso que se detenga y aplique un parametro mas
    let asciiPosition = text2.charCodeAt(i);
   // alert('text1 endcondin'+asciiPosition);
    let enCodexString = (asciiPosition+65 + shift2)%26 + 65;
   // alert('enCodexString'+ enCodexString);
    result += String.fromCharCode(enCodexString);
  //Esta cadena evita que salgan otros caracteres en donde debería ir un espacio.
    result = result.replace(/[&/\#,+()$~%.'":*?<>-{}]/g, " ");
  }
  //alert('result: '+result);
  return result;

}

};




js index2

document.getElementById("btn4").addEventListener("click",
function () {
let text2 = document.getElementById("text2").value;
let shift2 = document.getElementById("shift2").value;
 let resultado =cipher.encode(shift2,text2);
// alert(resultado);
document.getElementById("encrypt2").value = resultado;

});

let text2 = document.getElementById("text2");
text2.addEventListener("keyup", ()=>{
text2.value = text2.value.toUpperCase()
});



    
      <div class="secondContainer">
        <h3>Desencriptar</h3>
        <div for="cifrador2">Desencripta
          <input id="text2" type="text" placeholder="  Tienes 3 intentos">
        </div>
        <label for="shift2">Desplazamiento</label>
        <input id="shift2" type="number" min="1" max="10">
        <hr>
        <label for="encrypt2">Respuesta</label>
        <input id="encrypt2" type="text" readonly required>
        <div class="btn" id="btn4">Verificar</div>
      </div>
    </div>


