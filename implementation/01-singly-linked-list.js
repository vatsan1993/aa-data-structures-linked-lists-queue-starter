// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list

    let newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
    // O(1) time complexity
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here O(n)

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    if (this.head !== null) {
      let val = this.head;
      this.head = this.head.next;
      this.length--;
      return val;
    }
    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (this.head === null) {
      return undefined;
    }
    if (this.head.next == null) {
      let node = this.head;
      this.head = null;
      this.length--;
      return node;
    }
    if (this.head !== null) {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      let nodeToRemove = curr.next;
      curr.next = null;
      this.length--;
      return nodeToRemove;
    }
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  peekAtHead() {
    // Return value of head node
    if (this.head !== null) {
      return this.head.value;
    }

    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    if (this.head !== null) {
      let current = this.head;

      while (current) {
        console.log(current.value);
        current = current.next;
      }

      //   console.log('NULL');
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
