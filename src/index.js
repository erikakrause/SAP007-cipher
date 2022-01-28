import cipher from './cipher.js'; 

document.getElementById('btnEncode').addEventListener("click", cifrar);
document.getElementById('btnDecode').addEventListener("click", decifrar);
document.getElementById('btnClear').addEventListener("click", limpar)
document.getElementById("txtResult");

function cifrar () {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
      document.getElementById("txtResult").value=cipher.encode(offset, texto);
    } 
  
  console.log(texto); 


function decifrar () {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  
      document.getElementById("txtResult").value=cipher.decode(offset, texto);
    }
  
  console.log(texto); 

function limpar () {
  document.getElementById("message").value="";
  document.getElementById("txtResult").value="";
  document.getElementById("offset").value="1"
}