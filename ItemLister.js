// console.dir(document);
// console.log(document.doctype);
// console.log(document.lastElementChild);

// GetElementById

// console.log(document.getElementById('header-title'));

// var selectThirdItem = document.querySelector('list-group-item:nth-child(2)');
//     selectThirdItem.style.color='green';
//     selectThirdItem.style.font='bold';

// Traversing the dom
var itemList=document.querySelector('#items');

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.background='red'

// parentElement 
console.log(itemList.parentElement);
itemList.parentElement.style.background='black';

// childNode
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.background='red';

// firstchild
console.log(itemList.firstChild);

// firstElement child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello';

// lastChild
console.log(itemList.lastChild);
// last elementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello01'

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previous Sibling
console.log(itemList.previousSibling);
// previous ElementSibling
itemList.previousElementSibling.style.color='green';

// create Element
// Create a div
var newDev=document.createElement('div');

// Add class
newDev.className='Helloclass';
// add id
newDev.id='helloid'
// add atribute
newDev.setAttribute('title','hellotitle');
// add text node
var newDevText = document.createTextNode('hello text node');
// add text to div
newDev.appendChild(newDevText);
console.log(newDev);