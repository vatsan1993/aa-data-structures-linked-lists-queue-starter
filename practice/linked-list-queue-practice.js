// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToHead(val) {
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addToTail(val) {
    // O(1)
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    // O(1)
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    let total = 0;
    let curr = this.head;
    while (curr !== null) {
      total += curr.value;
      curr = curr.next;
    }
    return total;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    return this.sumOfNodes() / this.length;
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    if (n <= this.length) {
      let curr = this.head;
      let i = 0;
      while (i < n) {
        curr = curr.next;
        i++;
      }
      return curr;
    }
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    let midPoint;
    if (this.length % 2 == 0) {
      midPoint = Math.floor(this.length / 2);
    } else {
      midPoint = Math.floor(this.length / 2) + 1;
    }

    let node = this.findNthNode(midPoint - 1);
    // console.log(node``);
    return node;
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    let newList = new SinglyLinkedList();
    let node = this.head;
    while (node !== null) {
      newList.addToHead(node.value);
      node = node.next;
    }
    return newList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    let curr = this.head.next;
    let next = curr.next;
    let tail = this.tail;
    this.tail = this.head;
    this.head.next = null;
    while (curr !== tail) {
      curr.next = this.head;
      this.head = curr;
      curr = next;
      next = curr.next;
    }
    curr.next = this.head;
    this.head = curr;
  }
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }
    console.log('NULL');
  }
}

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
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let front = this.head;
    let back = this.tail;
    while (front !== back) {
      if (back.next == front) {
        return back;
      }
      front = front.next;
      back = back.prev;
    }
    return back;
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    // O(n)
    let back = this.tail;
    let newList = new DoublyLinkedList();
    while (back !== null) {
      newList.addToTail(back.value);
      back = back.prev;
    }
    return newList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let front = this.head;
    let back = this.tail;
    while (front !== back) {
      let temp = front.value;
      front.value = back.value;
      back.value = temp;
      if (front.next == back) {
        break;
      }
      front = front.next;
      back = back.prev;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }
    console.log('NULL');
  }
}

// let list = new SinglyLinkedList();

// list.addToHead(1);
// list.addToHead(2);
// list.addToHead(3);
// list.addToHead(4);
// list.print();
module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
