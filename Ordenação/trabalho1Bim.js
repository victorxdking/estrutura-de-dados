// Métodos de Ordenação 
// Trabalho 1º Bimestre 

/***************************
 BUBBLESORT
*/
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

/***************************
 SELECTIONSORT
*/
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

/***************************
 INSERTIONSORT
*/
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

/***************************
 QUICKSORT
*/
function quickSort(array) {
    return quicksort(array, 0, array.length - 1);
}

function quicksort(array, left, right) {
    var i = left;
    var j = right;
    var aux;
    var pivotidx = Math.floor((left + right) / 2);
    var pivot = array[pivotidx];
    // Partição
    while (i <= j) {
        while (array[i] < pivot)
            i++;
        while (array[j] > pivot)
            j--;
        if (i <= j) {
            aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            i++;
            j--;
        }
    }
    // Recursão
    if (left < j)
        quicksort(array, left, j);
    if (i < right)
        quicksort(array, i, right);
    return array;
}

/***************************
 GERAR VETORES
*/
function gerarVetorAleatorio(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * tamanho * 10));
    }
    return vetor;
}

function gerarVetorCrescente(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(i);
    }
    return vetor;
}

function gerarVetorDecrescente(tamanho) {
    let vetor = [];
    for (let i = tamanho - 1; i >= 0; i--) {
        vetor.push(i);
    }
    return vetor;
}


/***************************
 MEDIR TEMPO DE EXECUCAO
*/
function medirTempoExecucao(algoritmo, vetor, algoritmoNome, vetorTipo) {
    let inicio = process.hrtime();
    algoritmo(vetor.slice());
    let fim = process.hrtime(inicio);
    let tempo = fim[0] * 1000 + fim[1] / 1000000; // Convertendo para milissegundos
    console.log(`Tempo de execução (${algoritmoNome}, ${vetorTipo}): ${tempo} ms`);
}

// Vetor aleatório
let vetorAleatorio = gerarVetorAleatorio(100000);

// Vetor crescente
let vetorCrescente = gerarVetorCrescente(100000);

// Vetor decrescente
let vetorDecrescente = gerarVetorDecrescente(100000);


// Medir tempo de execução para o Bubble Sort em cada tipo de vetor
medirTempoExecucao(bubbleSort, vetorAleatorio, 'Bubble Sort', 'Aleatório');
medirTempoExecucao(bubbleSort, vetorCrescente, 'Bubble Sort', 'Crescente');
medirTempoExecucao(bubbleSort, vetorDecrescente, 'Bubble Sort', 'Decrescente');

// Medir tempo de execução para o Selection Sort em cada tipo de vetor
medirTempoExecucao(selectionSort, vetorAleatorio, 'Selection Sort', 'Aleatório');
medirTempoExecucao(selectionSort, vetorCrescente, 'Selection Sort', 'Crescente');
medirTempoExecucao(selectionSort, vetorDecrescente, 'Selection Sort', 'Decrescente');

// Medir tempo de execução para o Insertion Sort em cada tipo de vetor
medirTempoExecucao(insertionSort, vetorAleatorio, 'Insertion Sort', 'Aleatório');
medirTempoExecucao(insertionSort, vetorCrescente, 'Insertion Sort', 'Crescente');
medirTempoExecucao(insertionSort, vetorDecrescente, 'Insertion Sort', 'Decrescente');

// Medir tempo de execução para o Quick Sort em cada tipo de vetor
medirTempoExecucao(quickSort, vetorAleatorio, 'Quick Sort', 'Aleatório');
medirTempoExecucao(quickSort, vetorCrescente, 'Quick Sort', 'Crescente');
medirTempoExecucao(quickSort, vetorDecrescente, 'Quick Sort', 'Decrescente');
