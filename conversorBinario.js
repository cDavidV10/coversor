const coverter = (number, base)=>{
    let numberString = number.toString()
    let numberArray = numberString.split("").reverse()
    let result = 0;

    for (let i = 0; i < numberArray.length; i++){
    result += numberArray[i] * (base ** i)
}

}

coverter(32,8)

let numero = 10;

console.log(numero[0])

