fetch('./john_smith.json')
  .then(response => response.json())
  .then(data => setTree(data))
  .then(tree => {
    function collapseTree(){
      // collapse tree
      jsonview.collapse(tree);
    }

    function expandTree()
    {
      // expand tree
      jsonview.expand(tree);
    }

    document.getElementById("collapse").addEventListener("click", collapseTree);
    document.getElementById("expand").addEventListener("click", expandTree);
  })
  .catch(console.error);

function setTree(data)
{
  let tree = jsonview.create(data);
  jsonview.render(tree, document.querySelector('.root'));
  jsonview.expand(tree);

  return tree;
}

