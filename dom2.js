var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');
//Form Submit Event
form.addEventListener('submit', addItem);
//function for delete Node
itemList.addEventListener('click', removeItem);
//funstion for filter
filter.addEventListener('keyup', filterItems);
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
//Filter Function
function filterItems(e){
  //convert Text To LowerCases
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  });
}
