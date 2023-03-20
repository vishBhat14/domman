// console.dir(document); //examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images)

// // get element by id
// //console.log(document.getElementById('header-title'));
// //var headerTitle=document.getElementById('header-title');
// //var header=document.getElementById('main-header');
// //console.log(headerTitle);
// //headerTitle.textContent="hello";
// //headerTitle.innerText="hel";
// //console.log(headerTitle.textContent);
// //console.log(headerTitle.innerText);
// //headerTitle.innerHTML='<h3>hell</h3>';
// //headerTitle.style.borderBottom= 'solid 3px #000';
// //header.style.borderBottom='solid 2px #000';

// //getelement by class

// var title=document.getElementsByClassName('title');
// console.log(title);
// title[0].style.fontWeight='bold';
// title[0].style.color='green';


//task4commit.
//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='hello2';

//items[2].style.backgroundColor='green';


//iterating thru lists to change to bold color
//for(var i=0;i<items.length;i++)
{
   // items[i].style.fontWeight='bold';
   // items[i].style.backgroundColor='#f4f4f4';
}


//task5 get elements by tag name

//var li=document.getElementsByTagName('li');
//console.log(li);
//li[0].style.fontWeight='bold';
//li[0].style.color='green';

//for(var i=0;i<li.length;i++)
{
    //li[i].style.backgroundColor='#f4f4f4';
}

//queryselector

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc ';
//var input=document.querySelector('input');
//input.value='hello';

//var submit=document.querySelector('input[type=submit]');
//submit.value='send';

//var item=document.querySelector('.list-group-item');
//item.style.color='red';


//var lastitem=document.querySelector('.list-group-item:last-child');
//lastitem.style.color="blue";
 
//var nthitem=document.querySelector('.list-group-item:nth-child(2)');
//nthitem.style.backgroundColor='green';

//var nnitem=document.querySelector('.list-group-item:nth-child(3)');
//nnitem.style.visibility='hidden';


//queryselectorall
//var li=document.querySelectorAll('li');
//li[1].style.color='green';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++)
{
    //odd[i].style.backgroundColor='green';
}

//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<even.length;i++)
{
    //even[i].style.backgroundColor='#ccc';
}

//traversing the dom

// var itemlist=document.querySelector('#items');

//parentnodeproperty

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

//parentelement
// console.log(itemlist.parentElement);
//  itemlist.parentElement.style.backgroundColor='#f4f4f4';
//  console.log(itemlist.parentElement.parentElement.parentElement);

//childnode
// console.log(itemlist.childNodes);

//children
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

//firstelementchild

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello world';

// //lastelementchild
// itemlist.lastElementChild.textContent="hellow0";

//nextelementsibling
//console.log(itemlist.nextElementSibling);

//previoussibling

// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.backgroundColor='yellow';

//newdiv

// var newDiv = document.createElement('div');
// console.log(newDiv);

// // addclass
// newDiv.className='hello';

// console.log(newDiv);

// //add id
// newDiv.id='hello1';

// console.log(newDiv);

// //add attributr

// newDiv.setAttribute('title','hellowo');
// console.log(newDiv);

// //addtextnode
// var newdivtext=document.createTextNode('hello world');

// //append textnode to newdiv
// newDiv.appendChild(newdivtext);
// console.log(newDiv);

// var container= document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// console.log(newDiv);


// container.insertBefore(newDiv, h1);
// console.log(itemlist.parentNode);

// var itemlisterr=document.querySelector('div .list-group-item');

// console.log(itemlisterr);
// var itemss=document.querySelector('div #items');
// itemss.insertBefore(newDiv,itemlisterr);




var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
// creatwe delete button

var delbtn=document.createElement('button');
//add class
delbtn.className='btn btn-danger btn-sm float-right delete';
//add text node with 
delbtn.appendChild(document.createTextNode('X'));
li.appendChild(delbtn);

//add edit button
var editbtn=document.createElement('button');
//add class
editbtn.className='btn btn-danger btn-sm float-right delete';
//add text
editbtn.appendChild(document.createTextNode('edit'));
li.appendChild(editbtn);
    itemList.appendChild(li);

    
}

function removeItem(e){
e.preventDefault();

if(e.target.classList.contains('delete'))
{
   if(confirm('are you sure'))
   {
    var li=e.target.parentElement;
    itemList.removeChild(li);
   }

}
}