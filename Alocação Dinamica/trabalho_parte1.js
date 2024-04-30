function verificaExpressao(expressao) {
    const pilha = [];
    const pares = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];

        if (char === '(' || char === '[' || char === '{') {
            pilha.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const topo = pilha.pop();
            if (pares[topo] !== char) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}

// Exemplos de uso:
// true "3 * (4 + 5) - [6 * (7 + 8)]"
// false "(3 * 4) + [5 - 6)) - {7 + 8]"

const expressao = "{[()]}";
console.log(verificaExpressao(expressao));