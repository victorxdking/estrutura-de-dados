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

let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
console.log(numeros);
insertionSort(numeros);
console.log(numeros); // vetor ordenado
