const cipher = {
  encode(offset, texto) {
    let resultadoEncode = "";
    let letras = texto.length
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i)
      let codigoLetra = 65
      let valorEncode = ((codigoAsc + codigoLetra + offset)) % 26 + codigoLetra;
      resultadoEncode = resultadoEncode.concat(String.fromCharCode(valorEncode));
    }
    
  return resultadoEncode; 
  },

  decode(offset, texto) {
    let resultadoDecode = "";
    let letras = texto.length
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i)
      let codigoLetra = 90
      let valorDecode = ((codigoAsc - codigoLetra - offset)) % 26 + codigoLetra;
      resultadoDecode = resultadoDecode.concat(String.fromCharCode(valorDecode));
    
    }
    
  return resultadoDecode; 
  }
}

export default cipher;