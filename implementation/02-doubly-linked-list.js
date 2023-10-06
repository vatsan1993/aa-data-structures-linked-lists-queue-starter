// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
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

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    // O(1)
    // Add node of val to head of linked list

    let newNode = new DoublyLinkedNode(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here
    // O(1)
    let newNode = new DoublyLinkedNode(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    //O(1)
    if (this.head === null) {
      return undefined;
    }
    if (this.head.next === null) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node.value;
    }
    let node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.head.prev = null;
    this.length--;
    return node.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    // O(1)
    if (this.tail === null) {
      return undefined;
    }
    if (this.tail.prev === null) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node.value;
    }
    let node = this.tail;
    this.tail = this.tail.prev;
    node.prev = null;
    this.tail.next = null;
    this.length--;
    return node.value;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    // O(1)
    if (this.head !== null) {
      return this.head.value;
    }
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here
    if (this.tail !== null) {
      return this.tail.value;
    }
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
