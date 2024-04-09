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