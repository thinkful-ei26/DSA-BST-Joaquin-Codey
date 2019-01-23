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
        this.left = BinaryTreeSearch(key, value, this);
      }
    }
  }
}
