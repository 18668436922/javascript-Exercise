function myFunction() {
	var input,filter,table,tr,td,i;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	table = document.getElementById('myTable');
	tr = table.getElementsByTagName('tr');

	//循环表格每一行，查找匹配项。
	for(i=0;i<tr.length;i++) {
		td = tr[i].getElementsByTagName('td')[0];
		if(td) {
			if(td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = '';
			} else {
				tr[i].style.display = 'none';
			}
		}
	}
}
// 如果你需要区分大小写，可以移除toUpperCase()方法
// 如果你需要检索第二列（城市），可以讲tr[i].getElementsByTagName('td')[0]修改为[1].