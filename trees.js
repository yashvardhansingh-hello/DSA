class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    get(value) {
        if(!this.root) return undefined;
        let temp = this.root;
        while(temp) {
            if(value < temp.value) temp = temp.left;
            else if(value > temp.value) temp = temp.right;
            else return temp;
        }
        return undefined;
    }    
   
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {
            if(temp.value === value) return undefined;
            if(value > temp.value) {
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }
    
    minValueNode(currentNode) {
        if(!this.get(currentNode.value)) return undefined;
        let temp = this.root;
        while(!temp.left) temp = temp.left;
        return temp;
    }
    
    maxValueNode(currentNode) {
        if(!this.get(currentNode.value)) return undefined;
        let temp = this.root;
        while(!temp.right) temp = temp.right;
        return temp;
    }
    
    BFS() {
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }

    DFS_preOrder() {
        let result = [];
        function transverse(currentNode) {
            result.push(currentNode.value);
            if (currentNode.left) transverse(currentNode.left);
            if (currentNode.right) transverse(currentNode.right);
        }
        transverse(this.root);
        return result;
    }

    DFS_postOrder() {
        let result = [];
        function transverse(currentNode) {
            if (currentNode.left) transverse(currentNode.left);
            if (currentNode.right) transverse(currentNode.right);
            result.push(currentNode.value);
        }
        transverse(this.root);
        return result;
    }

    DFS_inOrder() {
        let result = [];
        function transverse(currentNode) {
            if (currentNode.left) transverse(currentNode.left);
            result.push(currentNode.value);
            if (currentNode.right) transverse(currentNode.right);
        }
        transverse(this.root);
        return result;
    }
}