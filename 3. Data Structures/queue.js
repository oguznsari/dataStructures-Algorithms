// array implementation 1
var queue = [];
queue.unshift("create new file");
queue.unshift("resized file");
queue.unshift("cloned out wrinkle");
queue.pop();
// Since adding to the beginning & removing from the beginning is not good (re-index). The 1st approach is better. .unshift() and .pop() are the better options.
var queue = [];
queue.push("google");
queue.push("instagram");
queue.push("youtube");
queue.shift();

// Singly Linked List implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
