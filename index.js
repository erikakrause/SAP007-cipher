import cipher from './cipher.js'; 

document.getElementById('btnEncode').addEventListener("click", cifrar);
document.getElementById('btnDecode').addEventListener("click", decifrar);
document.getElementById('btnClear').addEventListener("click", limpar)


function cifrar () { 
  let texto = document.getElementById("message").value.toUpperCase(); //ler o texto da cx1 e transforma minusculo em maiscula
  let offset = Number(document.getElementById("offset").value); //identifica o deslocamento selecionado
      document.getElementById("txtResult").value=cipher.encode(offset, texto); //passa a msg da cx1 para a cx2
    } 


function decifrar () {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  
      document.getElementById("txtResult").value=cipher.decode(offset, texto);
    }
  

function limpar () { //resetar todos os campos
  document.getElementById("message").value="";
  document.getElementById("txtResult").value="";
  document.getElementById("offset").value="1";
}