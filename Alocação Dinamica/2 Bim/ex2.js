/*
 2. Faça uma função que use uma pilha para inverter a ordem das letras de cada palavra de uma string, preservando a ordem das palavras. 
 Por exemplo, dado o texto:
◦ “EXERCICIO MUITO COMPLICADO”
◦ Saída: “OICICREXE OTIUM ODACILPMOC”
*/

var frase = 'abc xyz'
var pilha = [];
var letra, i = 0
var fraseInvertida = ' '

while(i < frase.length){
    while(frase[i] != '' && i < frase.length){
        pilha.push(frase[i])
        i++
    }
    while(pilha.length != 0){
        letra = pilha.pop()
        console.log(letra)
        fraseInvertida += letra
    }
    console.log(' ')
    fraseInvertida += ' '
    i++
}
console.log(fraseInvertida)