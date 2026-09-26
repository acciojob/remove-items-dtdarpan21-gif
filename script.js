//your JS code here. If required.
function removeColor(){
const colorSelect = document.getElementById("colorSelect");

if(colorSelect.selectedindex !== -1){
	colorSelect.remove(colorSelect.selectedIndex);
}
}