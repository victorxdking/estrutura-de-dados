/* 1. Faça uma função para intercalar filas: a função recebe as duas filas e retorna a fila com os elementos das duas filas intercalados.
*/

function intercalarFilas(fila1, fila2) {
    var filaIntercalada = [];

    while (fila1.length > 0 || fila2.length > 0) {
        if (fila1.length > 0) {
            filaIntercalada.push(fila1.shift());
        }
        if (fila2.length > 0) {
            filaIntercalada.push(fila2.shift());
        }
    }

    while (filaIntercalada.length > 0) {
        fila1.push(filaIntercalada.shift());
    }
}

// Exemplo de uso:
var fila1 = [1, 3, 5];
var fila2 = [2, 4, 6, 7];

intercalarFilas(fila1, fila2);
console.log('Fila 1 após intercalar:', fila1);
