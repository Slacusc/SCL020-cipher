const cipher = {  
  encode: (shift, text1) => {
    let result = "";
    for (let i= 0; i<(text1.length); i++) {
    //alert('variable i'+i); 
     //le pide al proceso que se detenga y aplique un parametro mas
      let asciiPosition = text1.charCodeAt(i);
     // alert('text1 endcondin'+asciiPosition);
      let enCodexString = (asciiPosition-65 + shift)%26 + 65;
     // alert('enCodexString'+ enCodexString);
      result += String.fromCharCode(enCodexString);
    // Esta cadena sirve pero no se pk no lee el - :( pero bueno, sirvió
      result = result.replace(/[&/,;+=()$~%.'":*?<>{}]/g, " ")
    }
    //alert('result: '+result);
    return result;
},
  decode: (shift2, text2) => {
  let result = "";
  for (let i= 0; i<text2.length; i++) {
   // alert('variable i'+i); le pide al proceso que se detenga y aplique un parametro mas
    let asciiPosition = text2.charCodeAt(i);
   // alert('text1 endcondin'+asciiPosition);
    let enCodexString = (asciiPosition-65 - shift2)%26 + 65;
   // alert('enCodexString'+ enCodexString);
    result += String.fromCharCode(enCodexString);
  //Esta cadena evita que salgan otros caracteres en donde debería ir un espacio.
    result = result.replace(/[&/,;+=()$~%.'":*?<>{}]/g, " ");
    result = result.replace(/[0-9]/g, " ");

  }
  //alert('result: '+result);
  return result;

}

};

export default cipher;


  //let alphabet = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  //let original = document.getElementById("");  
  //original = "".toUpperCase();
  //shift = 3;