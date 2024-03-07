// Escrever uma função recursiva que implemente a Busca Binária, em um vetor ordenado. Escrever também um programa para testar esta função.

// Função recursiva para busca binária
function buscaBinariaRecursiva(vetor, elemento, inicio, fim) {
    if (inicio > fim) {
        // Elemento não encontrado
        return -1;
    }

    const meio = Math.floor((inicio + fim) / 2);

    if (vetor[meio] === elemento) {
        // Elemento encontrado
        return meio;
    } else if (vetor[meio] > elemento) {
        // Busca na metade esquerda
        return buscaBinariaRecursiva(vetor, elemento, inicio, meio - 1);
    } else {
        // Busca na metade direita
        return buscaBinariaRecursiva(vetor, elemento, meio + 1, fim);
    }
}

// Função de teste
function testeBuscaBinaria() {
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const elemento = parseInt(prompt("Digite o elemento a ser buscado:"));

    const resultado = buscaBinariaRecursiva(vetor, elemento, 0, vetor.length - 1);

    if (resultado !== -1) {
        console.log("Elemento encontrado na posição:", resultado);
    } else {
        console.log("Elemento não encontrado no vetor.");
    }
}

// Chama a função de teste
testeBuscaBinaria();
