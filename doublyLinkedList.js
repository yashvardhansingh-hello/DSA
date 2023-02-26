class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.length = 1;
        this.head = newNode;
        this.tail = this.head;
    }

    push(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.length) return undefined;
        const temp = this.tail;
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if (!this.head) return undefined;
        if(this.length === 1) {
            return pop();
        }
        const temp = this.head;
        this.head = this.head.next;
        this.temp.next = null;
        this.head.prev = null;
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index+1 < this.length/2) {
            let temp = this.head;
            for (let i = 0; i <= index; i++) {
                temp = temp.next;
            }
            return temp;
        } else {
            let temp = this.tail;
            for (let i = this.length-1; i > index; i--) {
                temp = temp.prev;
            }
        return temp;
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
        temp.value = value;
        return true;
        }
        return false;
    }

    insert(index, value){
        if (!index) return unshift(value);
        if ((index+1) === this.length) return push(value);
        this.temp = this.get(index);
        if (temp) {
            const newNode = new Node(value);
            const pre = temp.prev;
            pre.next = newNode;
            temp.prev = newNode;
            newNode.prev = pre;
            newNode.next = temp;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (!index) return shift();
        if ((index+1) === this.length) return pop();
        const temp = this.get(index);
        const pre = temp.prev;
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }
}

const newList = new DoubleLinkedList(4);