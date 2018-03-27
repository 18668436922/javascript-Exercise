
	var Clo = document.getElementsByClassName('closebtn');
	var i;
	for(i=0;i<Clo.length;i++) {
		Clo[i].onclick = function () {
			var diV = this.parentElement;
			diV.style.opacity = '0';
            setTimeout(function(){diV.style.display = "none";},600);
		}
	}