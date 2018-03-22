//获取弹窗
var modal = document.getElementById('myModal');
//打开弹窗的按钮对象
var btn = document.getElementById('myBtn');
//获取span元素，用于关闭弹窗
var span = document.querySelector('.close');
//点击按钮打开弹窗
btn.onclick = function () {
	modal.style.display = "block";
}
//点击span，关闭窗口.
span.onclick =function () {
	modal.style.display = "none";
}
//用户点击其他地方时，关闭窗口。
window.onclick = function(e) {
	if(e.target == modal) {
		modal.style.display = "none";
	}
}