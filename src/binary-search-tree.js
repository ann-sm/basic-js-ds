const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
    // remove line with error and write your code here
  }

  add(data) {
    this.rootValue = addValue(this.rootValue, data);

    function addValue(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }

      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return searchValue(this.rootValue, data);

    function searchValue(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchValue(node.left, data);
      } else {
        return searchValue(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    if (!this.has(data)) {
      return null;
    } else {
      return new Node(data);
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootValue = removeValue(this.rootValue, data);

    function removeValue(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeValue(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeValue(node.right, data);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeValue(node.right, minFromRight. data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    let node = this.rootValue;

    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {
    let node = this.rootValue;

    while (node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};