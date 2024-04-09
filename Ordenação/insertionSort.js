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

/* 
Explicação

O algoritmo Insertion Sort ordena um vetor ao dividir o vetor em uma sublista ordenada e outra não ordenada. Inicialmente, a sublista ordenada contém apenas o primeiro elemento do vetor. Então, a cada iteração, um elemento é removido da sublista não ordenada e inserido na posição correta dentro da sublista ordenada até que todos os elementos estejam ordenados.

Funcionamento passo a passo do código:

1. O loop externo começa na posição `1` do vetor, pois o primeiro elemento é considerado já ordenado, e percorre o vetor até o final.
2. A variável `atual` armazena o valor do elemento atualmente sendo inserido na sublista ordenada.
3. O loop interno compara o elemento atual com cada elemento na sublista ordenada, começando do último elemento desta sublista e movendo-se para trás, até encontrar a posição correta para inserção.
4. Se um elemento da sublista ordenada é maior que o elemento atual, esse elemento é deslocado uma posição para a direita para criar espaço para o novo elemento.
5. Quando a posição correta é encontrada, o elemento atual (`atual`) é inserido.
6. Este processo se repete até que todos os elementos do vetor estejam na sublista ordenada, resultando em um vetor ordenado.
*/

/* 
Demonstração

O método de ordenação por Inserção Direta trabalha inserindo um elemento de cada vez na porção correta do vetor:

Exemplo 1:

vetor = [7,5,1,8,3]
Passo 1: [5,7,1,8,3] // 5 inserido antes de 7
Passo 2: [1,5,7,8,3] // 1 inserido no início
Passo 3: [1,5,7,8,3] // 8 já está no lugar correto
Passo 4: [1,3,5,7,8] // 3 inserido na posição correta

Exemplo 2:

vetor2 = [3,7,9,1,6,4,5,2,8]
Passo 1: [3,7,9,1,6,4,5,2,8] // 3 já está no lugar
Passo 2: [3,7,9,1,6,4,5,2,8] // 7 e 9 também
Passo 3: [1,3,7,9,6,4,5,2,8] // 1 inserido no início
Passo 4: [1,3,6,7,9,4,5,2,8] // 6 inserido na posição correta
... até que todo o vetor esteja ordenado.

Cada passo mostra a inserção do elemento na sua posição correta dentro da sublista ordenada.

Comparação de Algoritmos de Ordenação

Vamos comparar o Insertion Sort com outros algoritmos de ordenação frequentemente estudados:

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