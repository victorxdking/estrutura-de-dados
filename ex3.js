// Seleção direta

function selectionSort(vetor) {
    let x, minIndex;

    for (let i = 0; i < vetor.length - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            x = vetor[i];
            vetor[i] = vetor[minIndex];
            vetor[minIndex] = x;
        }
    }
}

let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
console.log(numeros);
selectionSort(numeros);
console.log(numeros); // vetor ordenado
