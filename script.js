
var headerTitle = document.getElementById(('header-title'));
console.log(headerTitle.innerText);

headerTitle.style.borderBottom = '4px solid white';
headerTitle.style.borderLeft = '4px solid white';

var submit = document.querySelector('input[type="submit"]');
submit.style.backgroundColor = 'green';

 var itemList = document.querySelector('#items');
 // parentNode
 // console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'lightgreen';


// the form collection section

var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');
// submit form
form.addEventListener('submit', addItem);
//  delete event
itemList.addEventListener('click', removeItem);

// create event listener
filter.addEventListener('keyup', filterItems)
// add item
function addItem(e){
	e.preventDefault();

	// get input value
	var newItem = document.getElementById('item').value;

	// create new li element
	var li = document.createElement('li');
	// add class
	li.className = 'list-group-item';

	// add text node with input value
	li.appendChild(document.createTextNode(newItem));

	// // create del button element
	var deleteBtn = document.createElement('button');
	// add clases to dlete btn
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	// append  text node
	deleteBtn.appendChild(document.createTextNode('X'));
	// append button to li
	li.appendChild(deleteBtn);

	// append li to list
	itemList.appendChild(li);
 
	
}

// remove item
function removeItem(e) {
	// body...
	console.log(1);
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure you want to delete this event?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}

}



function filterItems(e) {
	// body...
	// convert to lowerCase
	var text = e.target.value.toLowerCase();
	// console.log(text);
	// get list
	var items =  itemList.getElementsByTagName('li');
	// convert to array

	Array.from(items).forEach(function(item){
		var itemName =  item.firstChild.textContent;
		// console.log(itemName);
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}