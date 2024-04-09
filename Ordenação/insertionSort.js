// Inserção direta

function insertionSort(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let atual = vetor[i];
        let j = i - 1;
        while (j >= 0 && vetor[j] > atual) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = atual;
    }
}

let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
console.log("Antes da ordenação:", numeros);
insertionSort(numeros);
console.log("Após a ordenação:", numeros); // vetor ordenado
