function newElement(){

    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue = "") {
        alert("you must add something!");
    } else {
        document.getElementById.appendChild(li);
    }

    document.getElementById('inputValue').value = "";

    var span = document.CreateELement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}