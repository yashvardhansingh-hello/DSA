class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) {
            return undefined;
        }
        let pre = this.head;
        let temp = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }       
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return temp;
    }

    get(index){
        if (this.length <= index || index < 0) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value){
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if (!index) {
            return this.unshift(value);
        }
        if (index+1 === this.length) {
            return this.push(value);
        }
        if (index < 0 || (index+1) > this.length) {
            return false;
        }
        let temp = this.get(index-1);
        const newNode = new Node(value);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if (index < 0 || (index+1) > this.length) {
            return false;
        }
        if (!index) {
            return this.shift();
        }
        if ((index+1) === this.length) {
            return this.pop();
        }
        let pre = this.get(index-1);
        let temp = pre.next;
        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let pre = null;
        let after = temp.next;
        for (let i = 0; i < this.length; i++) {
            after = temp.next;
            temp.next = pre;
            pre = temp;
            temp = after;
        }
        return this;
    }
}

let newList = new LinkedList(1);
