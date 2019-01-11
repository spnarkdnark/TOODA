function newElement(){
    console.log('working');
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    var sp = document.createElement('SPAN');
    sp.id = inputValue;
    sp.className = 'timer';
    var timeValue = document.getElementById('myRange').value;
    var t2 = document.createTextNode(timeValue);
    sp.appendChild(t2);
    li.appendChild(sp);

    if (inputValue === "") {
        alert("you must add something!");
    } else {
        document.getElementById('myUL').appendChild(li);
    }

    document.getElementById('myInput').value = "";

    var listItems = document.getElementsByTagName('li') // or document.querySelectorAll("li");
    for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}
}


var input = document.getElementById('body')
input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13){
        document.getElementById('addBtn').click();
        console.log('yes');
        document.getElementById('myRange').value = 50;
        document.getElementById('minutes').innerHTML = 50;
        document.getElementById('myInput').focus();
        }
        });

var slider = document.getElementById('myRange');
var output = document.getElementById('minutes');
output.innerHTML = slider.value;

slider.oninput = function() {
    console.log('debug')
    output.innerHTML = this.value;
    }


