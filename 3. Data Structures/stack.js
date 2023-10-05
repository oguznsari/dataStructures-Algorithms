// array implementation 1
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();
// Since adding to the beginning & removing from the beginning is not good (re-index). The 1st approach is better. .push() and .pop() are the better options.
var stack2 = [];
stack2.unshift("create new file");
stack2.unshift("resized file");
stack2.unshift("cloned out wrinkle");
stack2.shift();

// Singly Linked List implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.newNode.next = temp;
    }
    return ++this.size;
  }

  pop() {
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
