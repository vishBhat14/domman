console.dir(document); //examine the document object

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images)

// get element by id
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
//headerTitle.textContent="hello";
//headerTitle.innerText="hel";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>hell</h3>';
headerTitle.style.borderBottom= 'solid 3px #000';
header.style.borderBottom='solid 2px #000';

//getelement by class

var title=document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight='bold';
title[0].style.color='green';

