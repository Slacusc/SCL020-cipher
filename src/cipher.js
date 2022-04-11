
//alert('test');
const cipher = {  
  encode: (shift, text1) => {
    let result = "";
    for (let i= 0; i<(text1.length); i++) {
     // alert('variable i'+i); le pide al proceso que se detenga y aplique un parametro mas
      let asciiPosition = text1.charCodeAt(i);
     // alert('text1 endcondin'+asciiPosition);
      let enCodexString = (asciiPosition-65 + shift)%26 + 65;
     // alert('enCodexString'+ enCodexString);
      result += String.fromCharCode(enCodexString);
     
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