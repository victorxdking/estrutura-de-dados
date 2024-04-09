// Bubble Sort

function bubbleSort(vetor) {
    let x; // Variável temporária para a troca de valores
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                x = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = x;
            }
        }
    }
}

let numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Antes da ordenação:", numeros);
bubbleSort(numeros);
console.log("Após a ordenação:", numeros); // vetor ordenado
