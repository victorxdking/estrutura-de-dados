// 25, 57, 48, 37, 12, 92, 86, 33

// let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
let numeros = [3, 2, 1];
let x;

for(let i = 0; i < numeros.length; i++) {
    for(let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
            x = numeros[i];
            numeros[i] = numeros[j]  
            numeros[j] = x;
        }
    }
}
console.log(numeros);