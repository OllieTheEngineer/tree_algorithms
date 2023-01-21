/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node) {
    // if there isn't a node in the tree return 0
    if(this.root === null) return 0;
    //  if there are no nodes on the left and right of root, return leaf node.
    if(node.left === null && node.right === null) return 1;
    // if there isn't a node on the left return right node + 1 to include the current node
    if(node.left === null) return minDepth(node.right) + 1;
    // check if there's right node if not return left node + 1 to include current node
    if(node.right === null) return minDepth(node.left) + 1;
    return Math.min(minDepth(node.left), minDepth(node.right)) + 1;

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node) {
  // if there isn't a node in the tree return 0
  if(this.root === null) return 0;
  //  if there are no nodes on the left and right of root, return leaf node.
  if(node.left === null && node.right === null) return 1;
  // if there isn't a node on the left return right node
  if(node.left === null) return minDepth(node.right) + 1;
  // check if there's right node if not return left node
  if(node.right === null) return minDepth(node.left) + 1;
  return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node) {
    let res = 0;
    if(!this.root === null) return 0;
    const left = maxSum(node.left);
    const right = maxSum(node.right);
    res = Math.max(res, node.val + left + right);
    ret
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(node, lowerBound) {
    // check for root- if none return null
    if(!this.root) return null;
    // check if node value is larger than lowerBound
    if(node.left > lowerBound){
      const leftNode = nextLarger(node.left, lowerBound);
      // check to see that left node is not empty
      if(leftNode !== null){
        // if not empty and larger than lowerBound, return left
        return leftNode;
      } else {
        return node;
      }
    } else{
      return nextLarger(node.right, lowerBound)
    }

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
