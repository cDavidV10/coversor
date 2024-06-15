import { CONVERSOR as conversor } from "./conversor.js";
import { createAlert as alerta } from "./alert.js";

const $btn = document.getElementById("btn")
const $decimal = document.querySelector("input");
const $valueBinario = document.querySelector(".binario");
const $valueOctal = document.querySelector(".octal");
const $valueHexa = document.querySelector(".hexa");
const $alert = document.getElementById("alert");

$btn.addEventListener("click", (e) => {
    e.preventDefault();
    let numDecimal = $decimal.value;
    if (numDecimal) {
        if (numDecimal % 1 == 0) {
            numDecimal = parseInt($decimal.value);
            $valueBinario.innerHTML = `${conversor(numDecimal, 2)}`;
            $valueOctal.innerHTML = `${conversor(numDecimal, 8)}`;
            $valueHexa.innerHTML = `${conversor(numDecimal, 16)}`;
        } else {
            closeAlert()
        }
        return;
    }

    if (!numDecimal) {
        closeAlert()
        return;
    }
    $decimal.value = "";
});

const inputClean = () => {
    $valueBinario.innerHTML = "";
    $valueOctal.innerHTML = "";
    $valueHexa.innerHTML = "";
}




const closeAlert = ()=>{
    inputClean()
    const createAlert = alerta()
    $alert.appendChild(createAlert)

    setTimeout(()=>{
        createAlert.remove()
    }, 5000)
}
