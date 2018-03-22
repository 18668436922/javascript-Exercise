//获取弹窗
var modal = document.getElementById('myModal');
//获取图片插入弹窗 - 使用"alt" 属性作为文本的内容
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function() {
	modal.style.display='block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
//获取span元素，设置关闭按钮
var span = document.getElementsByClassName('close')[0];
//当点击X，关闭弹窗。
span.onclick = function() {
	modal.style.display = 'none';
}