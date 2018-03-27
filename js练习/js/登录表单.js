var modal = document.getElementById('id01');
var btnA =document.getElementById('btn1');

function oPen() {
    if(this.target != modal) {
    	modal.style.display = 'block';
    }
}
function clOse() {
	if(modal.style.display='block') {
		modal.style.display='none';
	}
}