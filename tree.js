/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;

    function sumHelper(node){
      if(!node) return;
      sum += node.val;
      for(let child of node.children){
        sumHelper(child)
      }
    }
    sumHelper(this.root);
    return sum;
    // if(!this.root) return 0;
    // let sum = this.root.val;
    // for(let child of this.children ){
    //  newSum = sum += child.val
    //  return newSum;
    // }
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;

    function countHelper(node){
      if(!node) return;
      if(node.val % 2 === 0) count++;
      countHelper(node.left);
      countHelper(node.right);
    }
    countHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root === 0) return 0;

    let count = 0;

    function counterHelper(node){
      if(!node) return;
      if(node.val > lowerBound) count++;
      counterHelper(node.left);
      counterHelper(node.right);
    }
    counterHelper(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
