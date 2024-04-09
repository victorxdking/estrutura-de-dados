function limpar(fila) {
    while (fila.length !== 0) {
        fila.shift();
    }
}

var fila = [];
var x;

x = 7;
fila.push(x);
fila.push(1);
fila.push(2);

console.log('Fila: ' + fila);

x = fila.shift();
console.log('Elemento: ' + x);
console.log('Fila: ' + fila);

fila.push(10);
console.log('Fila após adicionar 10:', fila);

limpar(fila);
console.log('Fila após limpar:', fila);
