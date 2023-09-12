//EXAMINE DOCUMENT OBJECT 
// console.dir(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//var headerTitle= document.getElementById('header-title');
//var header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//headerTitle.innerHTML= '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 6px #000';

//GETELEMENTSBYCLASS
//var addItem = document.getElementsByClassName('title');
//console.log(addItem);
// addItem[0].style.fontWeight= 'bold';
// addItem[0].style.color= 'green';

//GETELEMENTSBYTAGNAME
var li= document.getElementsByTagName("li")
//console.log(li)
// li[0].textContent= "Wave1"
// li[0].style.backgroundColor ='green'
for(let i=0;i<li.length; i++){
    li[i].style.backgroundColor= 'yellow';
}
