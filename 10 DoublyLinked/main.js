class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Adds a node to the end of the list
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
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
  // removes the last Node in the list
  pop() {
    if (!this.head) return null;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp.val;
    }
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;

    return temp.val;
  }
  // removes the first Node in the List
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    // reset the list if empty
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
  }
  // Adds a Node to the beggining
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    if (index <= this.length / 2) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }
  set(index, value) {
    const updateNode = this.get(index);
    if (!updateNode) return false;
    updateNode.val = value;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1); // get the node just before
    var afterNode = beforeNode.next;

    // link before and new nodes
    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    // link after and new nodes
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}
var doubList = new DoublyLinkedList();
doubList.push("hi");
doubList.push("there");
doubList.push("my");
doubList.push("name");
doubList.push(44);
doubList.push(55);
doubList.push(66);
doubList.push("LAST TIME!!77");
console.log("doubList:", doubList);

console.log(doubList.get(1));
console.log(doubList.get(6));
console.log(doubList.insert(1, "INSERTED!!!!"));
console.log("doubList:", doubList);
console.log(doubList.get(1));
