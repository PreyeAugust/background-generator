//examine the document object

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);


//getelementbyid
//console.log(document.getElementById('items'));
//var headerTitle = document.getElementById('header-title');
//console.log(items);
//items.textContent = 'Hello';
//headerTitle.style.borderBottom = 'solid 3px #000';


//var titleName = document.getElementById('title-name');

//titleName.style.borderBottom = 'solid 5px #000';

//GETELEMENTSBYCLASSNAME
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';


//for(var i = 0; i < items.length; i++) {
//items[i].style.backgroundColor = 'red';
//}


//GETELEMENTSBYTAGNAME //
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';


//for(var i = 0; i < li.length; i++) {
  //  li[i].style.backgroundColor = 'red';
//}


//QUERYSELECTOR
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px pink';

//var input = document.querySelector('input');
//input.value = 'Hello world';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="Send"


//var items = document.querySelector('.list-group-item');
//items.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';


//QUERYSELECTORALL
//var titles = document.querySelectorAll('.titles');
//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for(var i = 0; i < odd.length; i++){
  //  odd[i].style.backgroundColor = 'coral';
    //even[i].style.backgroundColor = 'pink';
//}


//var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'red';


//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children); 
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow'; //this is if you want to use and style a particular child among the children


//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Ekueme 1';
//itemList.firstElementChild.style.fontWeight = 'bolder';


//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Ekueme 1';
//itemList.lastElementChild.style.fontWeight = 'bolder';


//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.textContent = 'Samson';
//itemList.previousElementSibling.style.backgroundColor = 'pink';
//itemList.previousElementSibling.style.color = 'green';



//Create a div
//var newDiv = document.createElement('div');

//Add class
//newDiv.className = 'hello';

//Add id
//newDiv.id = 'hello 1';

//Add attribute
//newDiv.setAttribute('title', 'Hello Div');

//Create text node
//var newDivText = document.createTextNode('Hello World who wants this dick!!');

//Add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('Header .container');
//var h1 = document.querySelector('header h1');


//console.log(newDiv);

//newDiv.style.fontSize = '20px'

//container.insertBefore(newDiv, h1);


//EVENTS
//var button = document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e){
    //console.log('Button clicked');
    //document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('#main').style.backgroundColor = 'red';
    //console.log(e);

    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    //console.log(e.target.classList);
    //var output = document.getElementById('output');
    //output.innerHTML = '<h3>'+e.target.id+'</h3>'

    //console.log(e.type)
    //console.log(e.clientX);
    //console.log(e.clientY);


    //console.log(e.offsetX);
    //console.log(e.offsetY);

    //console.log(e.altKey);
    //console.log(e.ctrlKey);
    //console.log(e.shiftKey);
//}


//var button = document.getElementById('button')
//var box = document.getElementById('box')


//button.addEventListener('click', runEvent);
//button.addEventListener('cdblclick', runEvent);
//button.addEventListener('mousedown', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);


//box.addEventListener('mousemove', runEvent);



//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
//var select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);


//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);


//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);


//form.addEventListener('submit', runEvent);

//function runEvent(e) {
  //e.preventDefault();
    //console.log('EVENT TYPE: '+e.type);
    //document.body.style.display = 'none';

    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

   // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

   //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//}

var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));