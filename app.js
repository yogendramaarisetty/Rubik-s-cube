
var selectedcell;
var temp;

function ready() {
    sys43 = document.getElementById('sys43');
    color = document.getElementById('rColors');
    cells = document.getElementsByClassName('cell');
    temp=document.getElementById("12");
   
}
function changeColor(cell){
    document.querySelector('select').value="black";
     temp=selectedcell;
selectedcell=cell;

temp.style.borderColor="black";
selectedcell.style.borderColor="rgb(226, 4, 226)";

}

function getcolor(rColors) {
    
    var selectedValue = rColors.value;
    selectedcell.style.backgroundColor = selectedValue;
    selectedValue=null;

}