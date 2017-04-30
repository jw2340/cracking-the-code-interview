// O(n) runtime with O(n) space
function removeDups(linkedListNode) {
  const hashTable = {};
  let currentNode = linkedListNode;
  let previousNode = null;

  while (currentNode !== null) {
    if (hashTable[currentNode.data]) {
      previousNode.next = currentNode.next;
    } else {
      hashTable[currentNode.data] = true;
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }

}

// O(n^2) runtime with O(1) space
function removeDups2(linkedListNode) {
  let currentNode = linkedListNode;

  while (currentNode !== null) {
    let runnerNode = currentNode;
    while (runnerNode.next !== null) {
      if (runnerNode.next.data === currentNode.data) {
        runnerNode.next = runnerNode.next.next;
      } else {
        runnerNode = runnerNode.next
      }
      console.log('currentNode', currentNode.data);
      console.log('runnerNode', runnerNode.data);
    }
    currentNode = currentNode.next;
  }
}
