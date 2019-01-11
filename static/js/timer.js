timeadded = 8920928340

function getTimeRemaining():
    var deadline = Date.parse(new Date()) + timeadded;
    var currentTime = Date.parse(new Date());
    var t = deadline - currentTime;

    var seconds = Math.floor( (t/1000) % 60);
    var minutes = Math.floor( (t/1000/60) % 60)
    var hours = Math.floor( ((t/1000)*60*60*24) % 24)
    var days = Math.floor( t/1000*60*60*24)

    return {"total":t,"seconds":seconds,"minutes":minutes,"hours":hours,"days":days}




