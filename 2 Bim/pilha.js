// // raciocínio 

// clear(pilha){
//     enquanto not empty(pilha){
//         pop(pilha)
//     }
// }

// top(pilha){
//     se empty(pilha){
//         retornar "Pilha vazia"
    
//     elemento_temporario = pop(pilha)
//     push(pilha, elemento_temporario)
//     }
//     retornar elemento_temporario
// }

// javascript

// Função para limpar a pilha
function clear(pilha) {
    while (!empty(pilha)) {
        pilha.pop();
    }
}

// Função para retornar o elemento do topo da pilha
function top(pilha) {
    if (empty(pilha)) {
        return "Pilha vazia";
    }
    
    let elemento_temporario = pilha.pop();
    pilha.push(elemento_temporario);
    return elemento_temporario;
}

// Função para verificar se a pilha está vazia
function empty(pilha) {
    return pilha.length === 0;
}

// Exemplo de uso
let minhaPilha = [1, 2, 3, 4, 5];

console.log("Pilha original:", minhaPilha);

console.log("Elemento do topo da pilha:", top(minhaPilha));

clear(minhaPilha);
console.log("Pilha após limpar:", minhaPilha);
