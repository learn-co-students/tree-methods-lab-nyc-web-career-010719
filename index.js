function inOrder(node) {
  console.log(node.data);

  if (node.left) {
    inOrder(node.left);
  };

  if (node.right) {
    inOrder(node.right);
  };
};

function findOrAdd(currentNode, newNode) {
  if (currentNode.data == newNode.data) {
    return true;
  };

  if (currentNode.data > newNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return currentNode.left = newNode;
    };
  };

  if (currentNode.data < newNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return currentNode.right = newNode;
    };
  };
};

function max(node) {
  if (node.right) {
    return max(node.right);
  } else {
    return node;
  };
};

function min(node) {
  if (node.left) {
    return min(node.left);
  } else {
    return node;
  };
};
