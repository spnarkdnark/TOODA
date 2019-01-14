let deadlines = {};
let timeRemaining = {};
let convertedTime = {};


function newElement(){

    var currentTime = Date.parse(new Date());

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
        deadlines[inputValue] = currentTime + (timeValue * 60 * 1000);
    }

    document.getElementById('myInput').value = "";

    var listItems = document.getElementsByTagName('li') // or document.querySelectorAll("li");
    for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}
}


function updateTaskTimes(){

    for (var key in deadlines){
        var currentTime = Date.parse(new Date());
        var t = deadlines[key];
        newTime = t - currentTime;
        timeRemaining[key] = newTime;
        }
}

function convertTimeValue(){

    for (var key in timeRemaining){

         var t = timeRemaining[key];

         var seconds = Math.floor((t / 1000) % 60);
         var minutes = Math.floor((t/1000 / 60) % 60);

         var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

         convertedTime[key] = [seconds,minutes,hours];
    }


}


function updateHTML(){

   for (var key in convertedTime){

       console.log(convertedTime[key]);
       sp = document.getElementById(key);
       console.log(sp);
       sp.innerHTML = convertedTime[key][2] + ':' + convertedTime[key][1] + ':' + convertedTime[key][0];

   }

}

window.setInterval(function(){

    updateTaskTimes();
    convertTimeValue();
    updateHTML();

}, 1000);

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


