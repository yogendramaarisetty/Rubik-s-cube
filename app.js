var sys43;
var color;
var test = 'xyz';
var cells = [];

function ready() {
    sys43 = document.getElementById('sys43');
    color = document.getElementById('rColors');
    cells = document.getElementsByClassName('cell');
    console.log(cells);
}


function fun(elem) {
    sys43 = elem;
}

function getcolor(rColors) {
    var selectedColor = rColors.options[rColors.selectedIndex].innerHTML;
    var selectedValue = rColors.value;
    sys43.style.backgroundColor = selectedValue;
    //document.getElementById('sys43').style.backgroundColor = selectedValue;

}