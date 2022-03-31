<script>  
      
        let originalMessage = "abcdefg";
    
        function startEncryption() {
          let encryptedMessage = "";
          let shift = 1;
        
// encryptedMessage += letter; solo toma las letras del original message
// El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado. Si la propiedad length es 0, devuelve undefined.
// line 49 se agrega un codigo de letras desde 0
// line 50 para que exista una nueva letra se aplica lettercobe (que empieza en 0)
// y se le suma el shift (que es el cambia de posicion)
// line 55: donde 65 es la primera letra en mayusculas del codigo ascii
          for (letter of originalMessage) {
            encryptedMessage += shiftLetter (letter,shift);
          }
        
          console.log(encryptedMessage);
        }
        startEncryption(); 
        function shiftLetter(letter,shift);{
          let newLetter = "";
          let letterCode = letter.charCodeAt(0);
          let newLetterCode = letterCode + shift;  

          if (newLetterCode < 65) {
            newLetterCode += 26;
          } else if (newLetterCode > 90){
            newLetterCode -= 26;
          }
          newLetter = String.fromCharCode(newLetterCode);
          return newLetter;
        }

        
        </script>  
        
   
    
    // function shiftLetter(letter, shift) {
     // let newLetter = "";
    
     // let letterCode = letter.charCodeAt(0);
      //let newLetterCode = letterCode + shift;
    
      //if (newLetterCode < 65) {
        // If new letter goes below "A" aka character code 65
      //  newLetterCode += 26;
      //} else if (newLetterCode > 90) {
        // If new letter goes past "z" aka character code 90
       // newLetterCode -= 26;
     // }
    
      //newLetter = String.fromCharCode(newLetterCode);
      
      //return newLetter;



        
        
