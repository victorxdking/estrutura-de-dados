/* Exercício
Fazer um programa com as seguintes funções de lista encadeada:
a) Mostrar todos os elementos da lista.
b) Remover o primeiro elemento da lista.
*/


function LinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    // Função para adicionar um elemento ao final da lista
    this.append = function(element){
        let node = new Node(element), current;
        if(head === null){
            head = node;
        } else {
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    // Função para mostrar todos os elementos da lista
    this.print = function(){
        let current = head;
        let elements = [];
        while(current){
            elements.push(current.element);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    };

    // Função para remover o primeiro elemento da lista
    this.removeFirst = function(){
        if(head !== null){
            let toRemove = head;
            head = head.next;
            toRemove.next = null;
            length--;
            return toRemove.element;
        }
        return null;
    };

    // Função para retornar o tamanho da lista
    this.size = function(){
        return length;
    };
}

let lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(15);
console.log('Lista Original:');
lista.print();  // Mostra todos os elementos da lista

console.log('Elemento removido:', lista.removeFirst());  // Remove o primeiro elemento da lista
console.log('Nova Lista:');
lista.print();  // Mostra todos os elementos após remoção


