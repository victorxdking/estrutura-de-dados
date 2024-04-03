// Métodos de Ordenação 
// Atividade 1 

// Fazer um programa que execute três métodos de ordenação: bubblesort, seleção direta e inserção direta. 
// Os testes devem ser realizados em 3 diferentes vetores de 1000 elementos de números inteiros: aleatório, 
// ordenado e invertido. Verificar o tempo de execução de cada caso e analisar os resultados obtidos. 

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

function gerarVetorAleatorio(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100000));
    }
    console.log("Vetor Aleatório:", vetor); 
    return vetor;
}

function gerarVetorOrdenado(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(i);
    }
    console.log("Vetor Ordenado:", vetor); 
    return vetor;
}

function gerarVetorInvertido(tamanho) {
    let vetor = [];
    for (let i = tamanho - 1; i >= 0; i--) {
        vetor.push(i);
    }
    console.log("Vetor Invertido:", vetor); 
    return vetor;
}

function medirTempoExecucao(algoritmo, vetor) {
    let inicio = performance.now();
    algoritmo(vetor.slice()); 
    let fim = performance.now();
    return fim - inicio;
}

// Vetor aleatório
let vetorAleatorio = gerarVetorAleatorio(100000);

// Vetor ordenado
let vetorOrdenado = gerarVetorOrdenado(100000);

// Vetor invertido
let vetorInvertido = gerarVetorInvertido(100000);

// Medir tempo de execução para cada algoritmo em cada tipo de vetor
let tempoBubbleAleatorio = medirTempoExecucao(bubbleSort, vetorAleatorio);
let tempoSelectionAleatorio = medirTempoExecucao(selectionSort, vetorAleatorio);
let tempoInsertionAleatorio = medirTempoExecucao(insertionSort, vetorAleatorio);

let tempoBubbleOrdenado = medirTempoExecucao(bubbleSort, vetorOrdenado);
let tempoSelectionOrdenado = medirTempoExecucao(selectionSort, vetorOrdenado);
let tempoInsertionOrdenado = medirTempoExecucao(insertionSort, vetorOrdenado);

let tempoBubbleInvertido = medirTempoExecucao(bubbleSort, vetorInvertido);
let tempoSelectionInvertido = medirTempoExecucao(selectionSort, vetorInvertido);
let tempoInsertionInvertido = medirTempoExecucao(insertionSort, vetorInvertido);

// Exibir os tempos de execução
console.log("Tempo Bubble Sort (Aleatório):", tempoBubbleAleatorio);
console.log("Tempo Bubble Sort (Ordenado):", tempoBubbleOrdenado);
console.log("Tempo Bubble Sort (Invertido):", tempoBubbleInvertido);

console.log("\nTempo Selection Sort (Aleatório):", tempoSelectionAleatorio);
console.log("Tempo Selection Sort (Ordenado):", tempoSelectionOrdenado);
console.log("Tempo Selection Sort (Invertido):", tempoSelectionInvertido);

console.log("\nTempo Insertion Sort (Aleatório):", tempoInsertionAleatorio);
console.log("Tempo Insertion Sort (Ordenado):", tempoInsertionOrdenado);
console.log("Tempo Insertion Sort (Invertido):", tempoInsertionInvertido);
