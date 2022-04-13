import cipher from './cipher.js';




document.getElementById("btn3").addEventListener("click",
function () {
let text1 = document.getElementById("text1").value;
let shift = parseInt(document.getElementById("shift").value);
// parseint es para transformar a numero.
// alert(text1);
// alert(shift);
// console.log(typeof shift)
 let resultado =cipher.encode(shift,text1);
// alert(resultado);
document.getElementById("encrypt").value = resultado;

if (text1 == null || text1 == 0 || text1 == [] || shift == 0 || shift == [] || shift == null){
    throw new TypeError('todo mal!')
}

//shift correcto: 3

if (resultado == "QR SXHGHV VDOLU"){ 
alert("NO CREAS QUE PODRÁS ESCAPAR, INTENTA CODIFICAR LA SEGUNDA FRASE OCULTA EN LAS INSTRUCCIONES"); 
    
}
//shifts incorrectos: 1, 2, 4, 5

if (resultado == "OP QVFEFT TBMJS"){ 
    alert("WARNING"); 
        
    }

if (resultado == "PQ RWGFGU UCNKT"){ 
        alert("WARNING"); 
            
    }

if (resultado == "RS TYIHIW WEPMV"){ 
        alert("WARNING"); 
            
    }
if (resultado == "ST UZJIJX XFQNW"){ 
        alert("WARNING"); 
            
    }    
});   

//para mayusculas cuando se ingrese a texto

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

// decodificar "DGLRV"
//Shift 3
if (resultado == "ADIOS"){ 
    alert("UNA VICTORIA NO ES NADA, NOS VEMOS EN LA SIGUIENTE PRUEBA, HUMANO")
    window.location="win.html";
        
}    

//shift incorrectos 1,2

if (resultado == "CFKQU"){ 
    alert("ADIOS HUMANO")
    window.location="GAMEOVER.html";
        
}

if (resultado == "BEJPT"){ 
    alert("ADIOS HUMANO")
    window.location="GAMEOVER.html";
        
}


    

});

//para mayusculas cuando se ingrese a texto

let text2 = document.getElementById("text2");
text2.addEventListener("keyup", ()=>{
text2.value = text2.value.toUpperCase()
});



// funcion para verificar que el texto está entrando

// let verify = document.getElementById("btn3");
// verify.addEventListener("click", ()=>{
