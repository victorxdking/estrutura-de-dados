/*
 2. Faça uma função que use uma pilha para inverter a ordem das letras de cada palavra de uma string, preservando a ordem das palavras. 
 Por exemplo, dado o texto:
◦ “EXERCICIO MUITO COMPLICADO”
◦ Saída: “OICICREXE OTIUM ODACILPMOC”
*/

function inverterPalavras(texto) {
    let resultado = "";
    let palavraAtual = "";

    // Iterar carcteres do texto
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        
        // Se o caractere não for um espaço, adicioná-lo à palavra atual
        if (caractere !== " ") {
            palavraAtual = caractere + palavraAtual; // Inserir o caractere no início da palavra
        } else {
            resultado += palavraAtual + " "; // Adicionar a palavra invertida ao resultado
            palavraAtual = ""; // Resetar a palavra atual para a próxima palavra
        }
    }

    // Adicionar a última palavra invertida ao resultado
    resultado += palavraAtual;

    // Exibir o resultado
    console.log(resultado);
}

let texto = "EXERCICIO MUITO COMPLICADO";
console.log(texto)
inverterPalavras(texto); 
// "OICICREXE OTIUM ODACILPMOC"
