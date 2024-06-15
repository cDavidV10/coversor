let  cociente, residuo, numeroSalida, resultado;

export const CONVERSOR = (numero, base)=>{
    numeroSalida = [];

    while (numero >= base){
        cociente = Math.trunc(numero / base);
        residuo = numero % base;
        if(residuo >= 10){
            residuo = validarHexa(residuo)
        }
        numeroSalida.push(residuo);
        numero = cociente;
    }

    let auxiliar = numero;
    if(auxiliar >= 10){
        auxiliar = validarHexa(auxiliar)
    }
    numeroSalida.push(auxiliar);
    resultado = numeroSalida.reverse().join("");
   return resultado
}

const validarHexa = (residuo)=>{
    for(let i = residuo; i <= residuo; i++){
        let ascii = 55 + residuo;
        return String.fromCharCode(ascii)
    } 
}