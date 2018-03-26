function sortTable() {
	var table,rows,switching,i,x,y,shouldSwitch;
	table = document.getElementById('myTable');
	switching = true;
	// 开始一个循环，直到没有转变为止。
	while(switching) {
		// 首先声明，没有转变成功
		switching = false;
		rows = table.getElementsByTagName('tr');
		// 循环遍历所有表行，除了第一行，其中包含表头。
		for(i=1;i<(rows.length - 1);i++) {
			// 首先声明，这里不应该有转变。
			shouldSwitch = false;
			// 获取要比较的两个元素，一个是当前行，一个是下一行
			x = rows[i].getElementsByTagName('td')[0];
			y = rows[i+1].getElementsByTagName('td')[0];
			//检查这两行是否应该转变位置。
			if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				// 如果成立，交换位置，结束循环
				shouldSwitch = true;
				break;
			}
		}
		if(shouldSwitch) {
			//如果一个转换被标记了，完成转换并显示完成。
			rows[i].parentNode.insertBefore(rows[i + 1],rows[i]);
			switching = true;
		}
	}
} 