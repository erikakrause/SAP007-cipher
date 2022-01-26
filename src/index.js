import cipher from './cipher.js';

document.getElementById('btnEncode').addEventListener("click", cifrar);
//document.getElementById('btnDecode').addEventListener("click", decifrar);
document.getElementById("txtResult");

function cifrar () {
  let texto = document.getElementById("message").value;
  let offset = Number(document.getElementById("offset").value);
      document.getElementById("txtResult").value=cipher.encode(offset, texto);
    } 
  
  console.log(texto); 

/*
function decifrar () {
  let texto = document.getElementById("message").value;
  let offset = Number(document.getElementById("offset").value);
  
      document.getElementById("txtResult").value=cipher.encode(offset, texto);
    }
  
  console.log(texto); */


