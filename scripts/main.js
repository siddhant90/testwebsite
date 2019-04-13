/*document.querySelector('html').onclick = function() {
    alert('Meow');
}*/
var but=document.querySelector('button');
var name;
var greeting=document.querySelector('h1');

function setUsername(){
//alert('THis one 2');
name=prompt('Enter Username');
localStorage.setItem('username',name);
greeting.textContent='Welcome back,'+name+'!';
}

if(!localStorage.getItem('username')){
setUsername();
}
else{
name=localStorage.getItem('username');
greeting.textContent='Welcome back,'+name+'!';
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpeg') {
      myImage.setAttribute ('src','images/cat2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat.jpeg');
    }
}



but.onclick=function(){
setUsername();
}
