function Node(data) {
    this.data = data;  // Armazena o valor do nó (número da pessoa)
    this.next = null;  // Ponteiro para o próximo nó na lista encadeada
}

function JosephusList(n, m) {
    let head = new Node(1);  // Cria o nó cabeça para a pessoa número 1
    let current = head;
    
    // Constrói a lista encadeada com n pessoas
    for (let i = 2; i <= n; i++) {
        current.next = new Node(i);
        current = current.next;
    }
    current.next = head;  // Conecta o último nó ao primeiro, tornando-a circular

    // Remove cada m-ésima pessoa até restar uma pessoa
    while (current.next !== current) {
        for (let count = 1; count < m; count++) {
            current = current.next;  // Avança m-1 vezes na lista
        }
        // Remove a m-ésima pessoa
        current.next = current.next.next;
    }

    // Retorna o dado do último nó sobrevivente
    return current.data;  
}

// Exibe o resultado de forma mais explicativa
console.log("O sobrevivente é a pessoa número " + JosephusList(10, 3));
