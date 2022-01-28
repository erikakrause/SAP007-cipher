const cipher = {
  // calculo para cifrar
  encode(offset, texto) {
    let resultadoEncode = "";
    let letras = texto.length
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i) 
      let codigoLetra = 65 
      if (codigoAsc >= 65 && codigoAsc <= 90) {
        let valorEncode = ((codigoAsc + codigoLetra + offset)) % 26 + codigoLetra;
        resultadoEncode = resultadoEncode + String.fromCharCode(valorEncode);
      } else { 
        resultadoEncode = resultadoEncode + String.fromCharCode(codigoAsc);
      }
    
    }
    
  return resultadoEncode; 
  },

  decode(offset, texto) {
    //calculo para decifrar
    let resultadoDecode = "";
    let letras = texto.length
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i)
      let codigoLetra = 90
        if (codigoAsc <= 90 && codigoAsc >= 65) { 
          let valorDecode = ((codigoAsc - codigoLetra - offset)) % 26 + codigoLetra;
          resultadoDecode = resultadoDecode + String.fromCharCode(valorDecode);
        } else { 
          resultadoDecode = resultadoDecode + String.fromCharCode(codigoAsc);
        }

        }
      
  return resultadoDecode; 
      }  
    }

export default cipher;

