let  cociente, residuo, numeroSalida, resultado;
const $btn = document.querySelector("button");
const $decimal = document.querySelector("input");
const $valueBinario = document.querySelector(".binario")
const $valueOctal = document.querySelector(".octal")
const $valueHexa = document.querySelector(".hexa")
const $error = document.querySelector("p")

$btn.addEventListener("click", (e)=>{
    e.preventDefault()
    let numDecimal = $decimal.value
    if (numDecimal % 1 == 0){
        numDecimal = parseInt($decimal.value)
        $valueBinario.innerHTML = `${CONVERSOR(numDecimal, 2)}`
        $valueOctal.innerHTML = `${CONVERSOR(numDecimal, 8)}`
        $valueHexa.innerHTML = `${CONVERSOR(numDecimal, 16)}`
    } else{
        $error.classList.add("error")
        $error.innerHTML = "Por favor escriba un numero entero"
        $error.classList.add("error")
        setTimeout(()=>{
            $error.classList.remove("error")
        }, 3000)
   
    }
    $decimal.value = ""
})  


const CONVERSOR = (numero, base)=>{
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
    for(i = residuo; i <= residuo; i++){
        let ascii = 55 + residuo;
        return String.fromCharCode(ascii)
    } 
}
