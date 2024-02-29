function bubbleSort (vetor) {
    for (i = 0; i < vetor.length; i++) {
        for(j = 0; j < vetor.length - i - 1; j++){
            if(vetor[j] > vetor[j+1]) {
                aux = vetor[j];
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux;
            }
        }
    }
}

let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(nums);
bubbleSort(nums);
console.log(nums);