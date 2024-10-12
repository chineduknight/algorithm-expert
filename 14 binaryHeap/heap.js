class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(num) {
    this.values.push(num);
    if (this.values.length === 1) return;
    let index = this.values.length - 1;

    let parentIndex = Math.floor((index - 1) / 2);
    let childElement = this.values[index];
    let parentelement = this.values[parentIndex];

    while (parentelement < childElement) {
      this.values[parentIndex] = childElement;
      this.values[index] = parentelement;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      childElement = this.values[index];
      parentelement = this.values[parentIndex];
    }
  }
}

const heap = new BinaryHeap();
heap.insert(1);
console.log(heap);
heap.insert(2);
console.log(heap);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(60);
heap.insert(600);
heap.insert(1000);
console.log(heap);
