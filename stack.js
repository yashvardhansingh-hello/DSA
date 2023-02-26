class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.size = 1;
        this.top = newNode;
    }

    push (value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        }else {
        newNode.next = this.top;
        this.top = newNode;
        }
        this.size++;
        return this;
    }

    pop (){
        if (!this.top) return undefined;
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.size--;
        return temp;
    }
}