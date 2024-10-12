// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length + 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined; // If there are no nodes to pop

    let current = this.head;
    let newTail = current; // This will eventually hold the second-to-last node

    // Traverse the list until the end
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Adjust the tail and disconnect the last node
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // reset the list if empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val; // Return the value of the node being removed
  }
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    // reset the list if empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, value) {
    const updateNode = this.get(index);
    if (!updateNode) return false;
    updateNode.val = value;
    return true;
  }
  // NOTE: this method is not really less optimal
  // Lets just say the second one might be slightly faster
  // cos there a slight overget with function calls ie
  // the call to the get method
  insertLessOptimal(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const node = this.get(index - 1);
    const currentNext = node.next;
    node.next = newNode;
    newNode.next = currentNext;
    this.length++;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    // Traverse the list until the index is reached
    while (currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    // Insert the new node
    newNode.next = current;
    previous.next = newNode;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // const nodeJustNextToRemoveNode = this.get(index - 1);
    // const nodeToRemove = nodeJustNextToRemoveNode.next;
    // nodeJustNextToRemoveNode.next = nodeToRemove.next;

    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;

    this.length--;
    return nodeToRemove.val;
  }
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let previousNode = null;

    while (currentNode) {
      nextNode = currentNode.next; // Store reference to the next node
      currentNode.next = previousNode; // Reverse the current node's pointer
      previousNode = currentNode; // Step forward in the list (move previous up)
      currentNode = nextNode; // Step forward in the list (move current up)
    }
  }
}

var list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("my");
list.push("name");
// list.pop();
console.log("list:", list);
console.log("list:revese", list.reverse());
console.log("list:", list);
// console.log(list.shift(), list);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift(), list);
// console.log(list.get(1));
// console.log(list.set(1, "Hello"));
// console.log(list.get(1));
