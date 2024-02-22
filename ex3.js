let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
let x, minIndex;

for (let i = 0; i < numeros.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[minIndex]) {
            minIndex = j;
        }
    }

    if (minIndex !== i) {
        x = numeros[i];
        numeros[i] = numeros[minIndex];
        numeros[minIndex] = x;
    }
}

console.log(numeros);
