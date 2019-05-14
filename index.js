function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
  console.log(currentNode.data)
}

function findOrAdd(rootNode, newNode){
  if (rootNode.data == newNode.data){
    return true
  }
  let currentNode = rootNode
  if (newNode.data < rootNode.data){
      currentNode = rootNode.left
      if (currentNode){
        return findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if (currentNode){
      return findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  }
}

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}
