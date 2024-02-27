// Bubble sort

function bubbleSort(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {

        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}

let nums = [25, 57, 48, 37, 12, 92, 86, 33];
console.log(nums);
bubbleSort(nums);
console.log(nums); // vetor ordenado
