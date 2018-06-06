var scroll = document.getElementsByClassName("scroll")[0]; //ie不兼容，换成id会成功
var panel = document.getElementsByClassName("Page"); //ie不兼容，换成id会成功
var running = false;
var inputC = document.getElementsByTagName("input");
var clientH = window.innerHeight;
scroll.style.height = clientH + "px";
for (var i = 0; i < panel.length; i++) {
    panel[i].style.height = clientH + "px";
    (function(i) {
        inputC[i].onclick = function() {
            if (inputC[i].checked == true) {
                panel[i].style.display = 'block';
                if (i < 2) {
                    panel[i + 1].style.display = 'none';
                }
                if (i == 0) {
                    panel[2].style.display = 'none';
                }
            }
        }
    })(i);
    if (inputC[i].checked != true) {
        panel[i].style.display = 'none';
    }
}
/*下面是关于鼠标滚动*/
var inputC = document.getElementsByTagName("input");
var wheel = function(event) {
    var delta = 0;
    if (!event) //for ie
        event = window.event;
    if (event.wheelDelta) { //ie,opera
        delta = event.wheelDelta / 120;
    } else if (event.detail) {
        delta = -event.detail / 3;
    }
    if (delta) {
        handle(delta, inputC);
    }
    if (event.preventDefault)
        event.preventDefault();
};
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
}
window.onmousewheel = wheel;

function handle(delta, arr) {
    if (!running) {
        running = true;
        var num;
        for (var i = 0; i < arr.length; i++) { //得到当前checked元素的下标
            if (arr[i].checked) {
                num = i;
            }
        }
        if (delta > 0 && num > 0) { //向上滚动
            num--;
            arr[num].checked = true;
            panel[num + 1].style.display = 'none';
        } else if (delta < 0 && num < 2) { //向下滚动
            num++;
            arr[num].checked = true;
            panel[num].style.display = 'block';

        }
        var Timer = setTimeout(function() {
            return running = false;
        }, 1000);
    }
}