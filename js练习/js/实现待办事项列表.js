// 添加一个‘关闭’按钮，而且追加到每个列表项上。
var myNodelist = document.getElementsByTagName('li');
var i;
for(i=0;i<myNodelist.length;i++) {
	var span = document.createElement('span');
	var txt = document.createTextNode("\u00d7");
	span.className = 'close';
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

//点击关闭按钮后隐藏当前的列表项
var close = document.getElementsByClassName('close');
var i;
for(i=0;i<close.length;i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = 'none';
	}
}
//点击一个列表项的时候添加一个选择图标
var list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
	if(ev.target.tagName === 'LI') {          // tagName返回的是大写的标签，所以这里要使用LI。
		ev.target.classList.toggle('checked');
	}
},false);

//单击‘添加’按钮时，创建一个新的列表项
function newElement() {
	var li =document.createElement('li');
	var inputValue = document.getElementById('myInput').value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === '') {
		alert("you must write something!");
	} else {
		document.getElementById('myUl').appendChild(li);
	}
	document.getElementById('myInput').value = '';

	var span = document.createElement('span');
	var txt =document.createTextNode('\u00d7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);
	for(i=0;i<close.length;i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}
}