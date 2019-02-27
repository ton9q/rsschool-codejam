module.exports = function recursion(tree) {
  const array = [];

  function treeToArray(node, depth) {
    if (!node) return ;
    
    if (!array[depth]) {
      array[depth] = [node.value];
    } else {
      array[depth].push(node.value);
    }

    treeToArray(node.left, depth + 1);
    treeToArray(node.right, depth + 1);
  }

  treeToArray(tree, 0)

  return array;
}