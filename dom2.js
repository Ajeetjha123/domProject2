var form = document.getElementById('addForm');

var itemList = document.getElementById('items');
//Form Submit Event
form.addEventListener('submit', addItem);
//function for delete Node
itemList.addEventListener('click', removeItem);
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  //create delete button
  var deleteBtn = document.createElement('button');
  //add className to delete btn
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      //append textNode
      deleteBtn.appendChild(document.createTextNode('X'));
      li.appendChild(deleteBtn);
  itemList.appendChild(li);
}
//remove Item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}