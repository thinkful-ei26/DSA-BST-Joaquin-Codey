'use strict';
class BinaryTreeSearch {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.parent = parent;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } // is there an open space at key?
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinaryTreeSearch(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTreeSearch(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

// Height of BST
// Write an algorithm to find the height of a binary search tree. What is the run time of your algorithm?
// runtime => O(n^2)
function heightBst(bst, count = 1, max = []) {
  if(bst) {
    if(!bst.left && !bst.right) {
      max.push(count)
    }
    heightBst(bst.left, count + 1, max)
    heightBst(bst.right, count + 1, max)
  }
  return max.sort()[max.length - 1]
}

// is it BST
function isBst(data) {

}

function main() {
  let bst = new BinaryTreeSearch();
  bst.insert(6); // top

  bst.insert(3); // left
  bst.insert(1);
  bst.insert(4);
  
  bst.insert(15); // right
  bst.insert(9);
  bst.insert(7);
  return bst;
}

const bst = main();
console.log(heightBst(bst));