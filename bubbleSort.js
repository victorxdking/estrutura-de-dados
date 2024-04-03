// Bubble Sort

function bubbleSort(vetor) {
    let x; // Variável temporária para a troca de valores
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                x = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = x;
            }
        }
    }
}

let numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Antes da ordenação:", numeros);
bubbleSort(numeros);
console.log("Após a ordenação:", numeros); // vetor ordenado

/*
Explicação

O Bubble Sort é um algoritmo de ordenação simples que repete a passagem pela lista, compara cada par de itens adjacentes e os troca se estiverem na ordem errada. As passagens pela lista são repetidas até que nenhuma troca seja necessária, indicando que a lista está ordenada.

Funcionamento passo a passo do código:

O loop externo percorre toda a lista, começando do primeiro elemento até o último.
O loop interno compara cada par de elementos adjacentes. Se o par estiver na ordem errada (o elemento da esquerda for maior que o da direita), os elementos são trocados.
A cada iteração do loop externo, o maior elemento "bolha" até sua posição correta no final da lista. Portanto, a cada passagem pelo loop externo, o número de elementos a serem comparados no loop interno pode ser reduzido em 1 (vetor.length - i - 1), pois o(s) último(s) elemento(s) já estão ordenados.
O processo continua até que uma passagem completa seja feita sem nenhuma troca, indicando que a lista está ordenada.

Demonstração

O método de ordenação Bubble Sort trabalha "bolhando" os maiores elementos para o final do vetor através de trocas sucessivas:

Exemplo:

vetor = [3, 7, 9, 1, 6, 4, 5, 2, 8]

Passo 1:

Compara 3 e 7, mantém.
Compara 7 e 9, mantém.
Compara 9 e 1, troca: [3, 7, 1, 9, 6, 4, 5, 2, 8]
Compara 9 e 6, troca: [3, 7, 1, 6, 9, 4, 5, 2, 8]
Compara 9 e 4, troca: [3, 7, 1, 6, 4, 9, 5, 2, 8]
Compara 9 e 5, troca: [3, 7, 1, 6, 4, 5, 9, 2, 8]
Compara 9 e 2, troca: [3, 7, 1, 6, 4, 5, 2, 9, 8]
Compara 9 e 8, troca: [3, 7, 1, 6, 4, 5, 2, 8, 9]

Passo 2:

Compara 3 e 7, mantém.
Compara 7 e 1, troca: [3, 1, 7, 6, 4, 5, 2, 8, 9]
Compara 7 e 6, troca: [3, 1, 6, 7, 4, 5, 2, 8, 9]
Compara 7 e 4, troca: [3, 1, 6, 4, 7, 5, 2, 8, 9]
Compara 7 e 5, troca: [3, 1, 6, 4, 5, 7, 2, 8, 9]
Compara 7 e 2, troca: [3, 1, 6, 4, 5, 2, 7, 8, 9]
O restante já está ordenado, então não há mais trocas.

Passo 3:

Compara 3 e 1, troca: [1, 3, 6, 4, 5, 2, 7, 8, 9]
Compara 3 e 6, mantém.
Compara 6 e 4, troca: [1, 3, 4, 6, 5, 2, 7, 8, 9]
Compara 6 e 5, troca: [1, 3, 4, 5, 6, 2, 7, 8, 9]
Compara 6 e 2, troca: [1, 3, 4, 5, 2, 6, 7, 8, 9]

Passo 4:

A partir daqui, os elementos menores vão se "bolhando" para a frente:
[1, 3, 4, 5, 2, 6, 7, 8, 9] se torna [1, 3, 4, 2, 5, 6, 7, 8, 9] após as trocas necessárias.
Passo 5:

Continuando o processo, obtemos: [1, 3, 2, 4, 5, 6, 7, 8, 9]

Passo 6:

E finalmente: [1, 2, 3, 4, 5, 6, 7, 8, 9]

A cada passo, o maior elemento "bolha" para a posição correta na parte direita do vetor. O processo continua até que não sejam necessárias mais trocas, indicando que o vetor está ordenado. Note que, na prática, o algoritmo pode terminar antes do passo final se não houver mais trocas necessárias em uma passagem completa pelo vetor.


Comparação de Algoritmos de Ordenação

Eficiência: O Bubble Sort tem uma eficiência de O(n²) no pior e no caso médio, semelhante ao Selection Sort.
Características: Apesar de ser um dos métodos mais simples de entender e implementar, é ineficiente para grandes conjuntos de dados devido à sua complexidade quadrática.
Uso: Mais utilizado em contextos educacionais para ensinar conceitos de algoritmos de ordenação ou quando a eficiência não é uma preocupação primária, dada a simplicidade do algoritmo. Não é recomendado para uso prático em grandes conjuntos de dados devido à sua baixa eficiência comparativa.
*/
