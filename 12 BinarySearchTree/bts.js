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
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.value) return false;
      if (val > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      }
    }
  }
  insertRec(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    return this._insertRecursive(this.root, newNode);
  }
  _insertRecursive(currentNode, newNode) {
    if (newNode.value === currentNode.value) {
      return false; // Duplicate value found, insertion aborted
    } else if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this; // Successfully inserted to the left
      } else {
        return this._insertRecursive(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this; // Successfully inserted to the right
      } else {
        return this._insertRecursive(currentNode.right, newNode);
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.value) return true;
      else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else currentNode = currentNode.left;
    }
    return false;
  }
  findRec(val) {
    function search(node, val) {
      // Base case: If node is null, the value is not found
      if (node === null) return false;
      if (val === node.value) return true;

      if (val < node.value) {
        return search(node.left, val);
      } else {
        return search(node.right, val);
      }
    }

    // Start the search from the root node
    return search(this.root, val);
  }
}
const bst = new BinarySearchTree();
console.log("bst", bst);
bst.insertRec(55);
bst.insertRec(33);
bst.insertRec(66);
console.log(bst.find(33));

console.log("bst", bst);
