function myFunction() {
	var demo = document.getElementById('snackbar');
	demo.className = 'show';
	setTimeout(function(){
	    demo.className = demo.className.replace('show','');
	},3000)
}