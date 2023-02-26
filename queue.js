class Node {
    constructor(value) {   
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor (value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.size = 1;
    }
    
    enqueue (value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue(){
        if (!this.first) return undefined;
        const temp = this.first;
        if (this.size === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.size--;
        return temp;
    }
}
