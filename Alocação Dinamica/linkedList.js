function LinkedList() {

    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;
    this.append = function(element) {
        let node = new Node(element), current;
        if(head === null) {
            head = node;
        } else {
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.size = function(){
        return length;
    }
};

list = new LinkedList();
lista.append(10);
lista.append(12);
console.log(lista.siza());