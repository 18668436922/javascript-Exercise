//点击开始游戏，动态生成100个格子。
//leftClick 没有雷，显示数字。（代表以当前小格为中心，周围8个格的雷的数量）-->如果没有雷，发生扩散（以当前小格为中心的九宫格没有雷时，进行扩散）
//rightClick 没有标记并且没有数字时，点击生成标记，有标记时，取消标记。-->判断标记是否正确，如果正确当前雷数-1 ，如果所有雷都被标记，成功。 


var startBtn = document.getElementById('start');
var box = document.getElementById('gbox');
var flag = document.getElementById('gflag');
var minesNum;
var minesOver;
var minesMap =[];
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementById('alertImg');
var closeBtn = document.getElementById('close');
var score = document.getElementById('score');


bindEvent();
function bindEvent() {
    startBtn.onclick = function () { 
        //打开游戏界面。
		box.style.display = "block";
		flag.style.display = "block";
		init();
    }
    box.oncontextmenu = function () {
    	//取消右键默认打开菜单。
    	return false;
    }
    alertBox.oncontextmenu = function () {
    	return false;
    }
    box.onmousedown = function (e) {
    	var event = e.target;
		if(e.which == 1) {
			leftClick(event);
		}else if(e.which == 3) {
			rightClick(event);
		}
    }
    closeBtn.onclick = function () {
    	//点击关闭按钮。
    	alertBox.style.display = 'none';
    	flag.style.display = 'none';
    	box.style.display = 'none';
    	box.innerHTML = '';
    }
}

function init() {
	//动态创建100个雷区小格，并且给每个小格加上对应的ID。
    minesNum = 10;
    minesOver = 10;
	score.innerHTML = minesOver; //开始新一局，初始数值。
    for(var i = 0; i < 10; i ++) {
    	for(var j = 0; j < 10; j ++) {
    		var con = document.createElement('div');
    		con.classList.add('block');
    		con.setAttribute('id', i + '-' + j);
    		box.appendChild(con);
            minesMap.push({mines:0})
    	}
    }
    var block = document.getElementsByClassName('block');
    while(minesNum) {
    	// 通过循环，随机添加10个地雷。
        var minesIndex = Math.floor(Math.random()*100);
        if(minesMap[minesIndex].mines === 0) {
			minesMap[minesIndex].mines = 1; 
		    block[minesIndex].classList.add('isLei');
		    minesNum --;
        }
    }
}

function leftClick(dom) {
	if(dom.classList.contains('flag')) { //当被标记旗子后，不能点击。
		return;
	}
	//当点击到地雷时。
	var isLei = document.getElementsByClassName('isLei');
	if(dom && dom.classList.contains('isLei')) {
		console.log('gameOver');
		for(var i = 0; i < isLei.length; i ++) {
			isLei[i].classList.add('show');
		}
        setTimeout(function(){
        	alertBox.style.display = 'block';
			alertImg.style.backgroundImage = 'url(image/over.jpg)';
        },800)
	}else {
		//生成数字。
		var n = 0;
		var posArr = dom && dom.getAttribute('id').split('-');
		var posX = posArr && +posArr[0]; //使用 + 进行类型转换。转换为数字。同下。
		var posY = posArr && +posArr[1];
		dom.classList.add('num');
		//遍历查看以当前位为中心，九宫格内雷的数量。如果没有雷，向外延伸。
		for(var i = posX - 1; i <= posX + 1; i++) {
			for(var j = posY - 1; j <= posY + 1; j ++) {
				var aroundBox = document.getElementById(i + '-' + j);
				if(aroundBox && aroundBox.classList.contains('isLei')) {
					n ++;
				}
			}
		}
		dom && (dom.innerHTML = n);
		if(n == 0) {
			//当周围没雷，利用递归，调用自身。
			for(var i = posX - 1; i <= posX + 1; i ++) {
				for(var j = posY - 1; j <= posY + 1; j ++) {
					var nearBox = document.getElementById(i + '-' + j);
					if(nearBox && nearBox.length != 0) {
						if(!nearBox.classList.contains('check')) {
						    nearBox.classList.add('check');
							leftClick(nearBox);	
						}
					} 
				}
			}
		}

	}
}
function rightClick(dom) {
	//如果右键已经有数字的元素。无效果
	if(dom.classList.contains('num')) {
		return false;
	}
	//添加旗子背景。
	dom.classList.toggle('flag');
	if(dom.classList.contains('isLei') && dom.classList.contains('flag')) {
		minesOver --;
	}
	if(dom.classList.contains('isLei') && !dom.classList.contains('flag')) {
		minesOver ++;
	}

	score.innerHTML = minesOver;
	if(minesOver == 0) {
		alertBox.style.display = 'block';
		alertImg.style.backgroundImage = 'url(image/winner.jpg)';

	}

}
































