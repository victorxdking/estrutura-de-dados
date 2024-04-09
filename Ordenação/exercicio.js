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

// Inserção direta
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}

let nums = [25, 57, 48, 37, 12, 92, 86, 33];

console.log("Original:", nums);

// Chama as funções de ordenação com uma cópia do vetor original
let numsBubbleSort = nums.slice();
bubbleSort(numsBubbleSort);
console.log("Bubble Sort:", numsBubbleSort);

let numsSelectionSort = nums.slice();
selectionSort(numsSelectionSort);
console.log("Selection Sort:", numsSelectionSort);

let numsInsertionSort = nums.slice();
insertionSort(numsInsertionSort);
console.log("Insertion Sort:", numsInsertionSort);
