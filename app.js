
var selectedcell;

function ready() {
    sys43 = document.getElementById('sys43');
    color = document.getElementById('rColors');
    cells = document.getElementsByClassName('cell');
    console.log(cells);
}
function changeColor(cell){
    var temp=selectedcell;
selectedcell=cell;
temp.style.borderColor="black";
selectedcell.style.borderColor="#1a75ff";
}

function getcolor(rColors) {
    
    var selectedValue = rColors.value;
    selectedcell.style.backgroundColor = selectedValue;
    

}