class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }
  // Implement push function.
  push(val) {
    let node = { value: val, next: null };
    node.next = this.top;
    this.top = node;
    this.count++;
  }
  // Implement pop function.
  pop() {
    // Check if there is nothing to pop.
    if (this.top === null) {
      return null;
    }
    let poppedNode = this.top;
    this.top = this.top.next;
    if (this.count > 0) {
      this.count--;
    }
    return poppedNode.value;
  }
  // Implement peek function.
  peek() {
    if (this.top === null) {
      return null;
    } else {
      return this.top.value;
    }
  }
  // Check if something exists in the stack.
  search(target) {
    var node = this.top;
    if (node.value === target) {
      return true;
    }

    while (node.next !== null) {
      node = node.next;
      if (node.value === target) {
        return true;
      }
    }
    return false;
  }
  // Implement empty function.
  empty() {
    return this.top === null;
  }
}

module.exports = Stack;
