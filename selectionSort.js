// Seleção direta

function selectionSort(vetor) {
    let x; // Variável temporária para a troca de valores
    let minIndex; // Índice do menor elemento encontrado no loop interno

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

let numeros = [25, 57, 48, 37, 12, 92, 86, 33];
console.log("Antes da ordenação:", numeros);
selectionSort(numeros);
console.log("Após a ordenação:", numeros); // vetor ordenado

/* 
Explicação

O algoritmo percorre o vetor, selecionando o menor elemento entre uma posição `i` e o final do vetor, e troca esse menor elemento encontrado com o elemento na posição `i`. Este processo é repetido para cada posição do vetor, exceto para a última, pois quando se chega à penúltima posição, automaticamente o último elemento já está na posição correta.

Funcionamento passo a passo do código:

1. O loop externo começa na posição `0` do vetor e move-se para a direita, indo até a penúltima posição (`vetor.length - 1`), pois não é necessário comparar o último elemento consigo mesmo.
2. Dentro do primeiro loop, é definido `minIndex = i`, assumindo temporariamente que o elemento atual é o menor do restante do vetor.
3. O loop interno começa da posição `i + 1` e vai até o final do vetor, comparando cada elemento com o valor atualmente considerado o menor (`vetor[minIndex]`). Se um elemento menor é encontrado, `minIndex` é atualizado para a posição desse novo elemento mínimo.
4. Após encontrar o menor elemento no restante do vetor, verifica-se se `minIndex` é diferente de `i`. Se for, isso significa que um elemento menor foi encontrado em uma posição diferente da inicial, e troca-se os valores nas posições `i` e `minIndex`.
5. O processo se repete até que o vetor esteja completamente ordenado.
*/

/* 
Demonstração

O método de ordenação por Seleção Direta consiste em pegar o menor elemento do vetor e colocá-lo na primeira posição, repetindo o processo para cada posição do vetor:

Exemplo 1:

vetor = [7,5,1,8,3]
Passo 1: [1,5,7,8,3]
Passo 2: [1,3,7,8,5]
Passo 3: [1,3,5,8,7]
Passo 4: [1,3,5,7,8]

Exemplo 2:

vetor2 = [3,7,9,1,6,4,5,2,8]
Passo 1: [1,7,9,3,6,4,5,2,8]
Passo 2: [1,2,9,3,6,4,5,7,8]
Passo 3: [1,2,3,9,6,4,5,7,8]
Passo 4: [1,2,3,4,6,9,5,7,8]
Passo 5: [1,2,3,4,5,9,6,7,8]
Passo 6: [1,2,3,4,5,6,9,7,8]
Passo 7: [1,2,3,4,5,6,7,9,8]
Passo 8: [1,2,3,4,5,6,7,8,9]


Cada passo mostra a seleção do menor elemento restante sendo movido para a posição correta.
*/

/*
Comparação de Algoritmos de Ordenação
Vamos comparar o Selection Sort com outros algoritmos de ordenação frequentemente estudados:

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
Para eficiência geral: QuickSort é frequentemente a escolha devido à sua eficiência média de tempo de O(n log n) e desempenho geralmente bom em prática.
Para garantia de tempo: HeapSort oferece um desempenho consistente de O(n log n), tornando-o uma escolha sólida para dados em larga escala.
Para simplicidade: Selection Sort e Bubble Sort são fáceis de entender e implementar, mas sua ineficiência para conjuntos de dados maiores limita seu uso a aplicações educacionais ou conjuntos de dados muito pequenos.
Cada algoritmo tem seu lugar dependendo do tamanho do conjunto de dados, requisitos de eficiência e memória, e se a estabilidade na ordenação é uma preocupação.
*/
