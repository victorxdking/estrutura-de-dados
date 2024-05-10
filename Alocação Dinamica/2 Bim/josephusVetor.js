function JosephusArray(n, m) {
    // Inicializa um array com pessoas numeradas de 1 até n
    let people = Array.from({ length: n }, (_, i) => i + 1);
    let index = 0;  // Define o índice inicial para a eliminação

    // Executa enquanto houver mais de uma pessoa no array
    while (people.length > 1) {
        // Calcula o próximo índice a ser removido. Usa m-1 porque já estamos no índice atual
        index = (index + m - 1) % people.length;
        // Remove a pessoa na posição calculada
        people.splice(index, 1);
    }

    // Retorna a última pessoa sobrevivente
    return people[0];  
}

// Exibe o resultado de forma mais explicativa
console.log("O sobrevivente é a pessoa número " + JosephusArray(10, 3));