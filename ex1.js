const vetor = []; // Vetor vazio

// Inserir elementos
vetor.push(10);
vetor.push(20);
vetor.push(30);

// Remover elemento com valor 20
const valorParaRemover = 20;
const novoVetor = vetor.filter(item => item !== valorParaRemover);

// Remover elemento na posição 1 (índice 1)
const indiceParaRemover = 1;
novoVetor.splice(indiceParaRemover, 1);

// Somar elementos pares
function somarElementosPares(vetor) {
  return vetor.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc, 0);
}

// Somar elementos entre os índices 0 e 1
const somaEntreIndices = somarElementosEntreIndices(novoVetor, 0, 1);

console.log("Novo vetor:", novoVetor);
console.log("Soma dos elementos pares:", somarElementosPares(novoVetor));
console.log("Soma entre os índices 0 e 1:", somaEntreIndices);
