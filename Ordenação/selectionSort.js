// QuickSort

function quickSort(array, left, right) {
    let i = left;
    let j = right;
    let temp;
    let pivotIdx = Math.floor((left + right) / 2);
    let pivot = array[pivotIdx];
    
    // Partição
    while (i <= j) {
        while (parseInt(array[i]) < pivot)
            i++;
        while (parseInt(array[j]) > pivot)
            j--;
        if (i <= j) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    if (left < j)
        quickSort(array, left, j);
    if (i < right)
        quickSort(array, i, right);
    return array;
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];
console.log("Antes da ordenação:", nums);
quickSort(nums, 0, nums.length - 1);
console.log("Após a ordenação:", nums);

/* 
Explicação

O algoritmo QuickSort é um método de ordenação eficiente e amplamente utilizado que divide uma lista em duas sublistas ao redor de um elemento escolhido como pivô. Os elementos menores que o pivô são colocados à esquerda e os maiores à direita. Em seguida, o algoritmo é aplicado recursivamente às sublistas. A eficiência do QuickSort é atribuída ao fato de que ele evita a necessidade de realocação de espaço, operando na própria lista de entrada.

Funcionamento passo a passo do código:

1. Escolha do pivô: Calcula-se o índice do pivô, geralmente como a média dos índices de início e fim do array.
2. Particionamento: Os elementos são rearranjados de forma que os elementos menores que o pivô estejam à sua esquerda e os maiores à sua direita.
3. Recursão: O QuickSort é aplicado recursivamente às sublistas à esquerda e à direita do pivô.
4. Os passos 2 e 3 são repetidos até que cada sublista contenha apenas um elemento, o que garante que todo o array esteja ordenado.

Demonstração

O QuickSort opera dividindo repetidamente uma lista em sublistas menores, ordenando essas sublistas e combinando-as para produzir a lista final ordenada:

Exemplo:

array = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
Passo 1: [11, 44, 22, 33, 0, 55, 88, 77, 66, 99]
Passo 2: [0, 11, 22, 33, 44, 55, 88, 77, 66, 99]
Passo 3: [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

Cada passo mostra o pivô selecionado e a subsequente rearranjo da lista.

Comparação de Algoritmos de Ordenação

Vamos comparar o QuickSort com outros algoritmos de ordenação frequentemente estudados:

Bubble Sort

Eficiência: O(n²) em média e no pior caso.
Características: Simples de implementar, mas ineficiente para listas grandes. Opera trocando elementos adjacentes se estiverem na ordem errada.
Uso: Pode ser útil para conjuntos de dados muito pequenos ou quando a memória é uma limitação.
Insertion Sort

Eficiência: O(n²) em média e no pior caso, mas tende a ser mais rápido que o Bubble Sort e o Selection Sort em prática, especialmente para pequenos conjuntos de dados.
Características: Eficiente para conjuntos de dados pequenos, estável e fácil de implementar.
Uso: Boa escolha quando se adicionam novos elementos a uma lista já ordenada.
QuickSort

Eficiência: O(n log n) em média, mas O(n²) no pior caso.
Características: Um dos algoritmos de ordenação mais rápidos e eficientes. Utiliza a estratégia de dividir para conquistar.
Uso: Adequado para grandes conjuntos de dados, exceto quando a estabilidade é necessária.
HeapSort

Eficiência: O(n log n) tanto em média quanto no pior caso.
Características: Baseado em estrutura de dados de heap. Não é estável, mas não requer espaço adicional.
Uso: Boa escolha para ordenação in-place com eficiência de tempo garantida.
ShellSort

Eficiência: Complexidade varia conforme a sequência de lacunas utilizada, mas é significativamente mais rápido que O(n²) para a maioria das sequências.
Características: Generalização do Insertion Sort que permite a troca de itens distantes.
Uso: Útil para conjuntos de dados de tamanho moderado. A escolha da sequência de lacunas afeta significativamente seu desempenho.
Conclusão sobre a Comparação

Para conjuntos de dados pequenos: Insertion Sort e ShellSort são geralmente preferidos devido à sua simplicidade e eficiência nesse contexto.

Para eficiência geral: QuickSort é frequentemente a escolha devido à sua eficiência média de tempo de O(n logn) e desempenho geralmente bom na prática.

Para garantia de tempo: HeapSort oferece um desempenho consistente de O(n log n), tornando-o uma escolha sólida para dados em larga escala.

Para simplicidade: Selection Sort e Bubble Sort são fáceis de entender e implementar, mas sua ineficiência para conjuntos de dados maiores limita seu uso a aplicações educacionais ou conjuntos de dados muito pequenos.

Cada algoritmo tem seu lugar dependendo do tamanho do conjunto de dados, requisitos de eficiência e memória, e se a estabilidade na ordenação é uma preocupação.
*/