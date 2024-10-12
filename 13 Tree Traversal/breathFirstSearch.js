class Node {
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
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  /**
   * BFS

Steps - Iteratively

Create a queue (this can be an array) and a variable to store the values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
If there is a left property on the node dequeued - add it to the queue
If there is a right property on the node dequeued - add it to the queue
Return the variable that stores the values
   *
   *
   */
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFS(order = "pre-order") {
    let result = [];
    let current = this.root;

    function traversePreOrder(node) {
      if (!node) return;
      result.push(node.value);
      traversePreOrder(node.left);
      traversePreOrder(node.right);
    }

    function traverseInOrder(node) {
      if (node.left) traverseInOrder(node.left);
      result.push(node.value);
      if (node.right) traverseInOrder(node.right);
    }

    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.value);
    }

    switch (order) {
      case "in-order":
        traverseInOrder(current);
        break;
      case "post-order":
        traversePostOrder(current);
        break;
      default:
        traversePreOrder(current);
    }
    return result;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
// console.log("tree.insert(20):", tree.insert(20));
console.log("tree:", tree);
console.log("tree.BFS():", tree.BFS());
console.log("tree.DFS():", tree.DFS());
console.log("tree.DFS():", tree.DFS("post-order"));
console.log("tree.DFS():", tree.DFS("in-order"));
