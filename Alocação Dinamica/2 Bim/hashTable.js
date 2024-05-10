function HashTable(size = 13) {
    // Inicializa a tabela hash com um tamanho padrão e preenche com `null`
    this.table = new Array(size).fill(null);

    // Função de hash que utiliza o código ASCII do primeiro caractere e aplica módulo pelo tamanho
    this.hash = function(key) {
        return key.charCodeAt(0) % size;
    };

    // Insere uma chave na tabela. Se houver colisão, aplica o hashing linear para encontrar um índice livre
    this.inserir = function(key) {
        let index = this.hash(key); 
        let startIndex = index; 

        while (this.table[index] !== null) { 
            index = (index + 1) % size; 
            if (index === startIndex) { 
                console.log("A tabela hash está cheia");
                return;
            }
        }

        this.table[index] = key; // Insere a chave na posição encontrada
        console.log(`Chave '${key}' inserida no índice ${index}`);
    };

    // Busca uma chave na tabela. Retorna `true` se encontrada, `false` se não encontrada
    this.buscar = function(key) {
        let index = this.hash(key); 
        let startIndex = index; // 

        while (this.table[index] !== null) { 
            if (this.table[index] === key) { 
                console.log(`Chave '${key}' encontrada no índice ${index}`);
                return true;
            }
            index = (index + 1) % size; // Hashing linear: vai para o próximo índice
            if (index === startIndex) { // Se voltou ao índice inicial, a chave não está na tabela
                console.log(`Chave '${key}' não encontrada`);
                return false;
            }
        }
    };
}

// Exemplo de uso
var hashTable = new HashTable();
hashTable.inserir('A');
hashTable.inserir('B');
hashTable.buscar('A');
hashTable.buscar('Z');  
