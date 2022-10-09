const end = parseInt((new Date().getTime() / 1000 )+ 60)
var start = parseInt(new Date().getTime() / 1000)


function chrono() {
    start = parseInt(new Date().getTime() / 1000)
    if (end-start < 1) {
        clearInterval(timing)
        document.getElementById("typing").style = "display: none;"
        document.getElementById('wordlist-parent').style = "display: none;"
        document.getElementById('WPM').style = "font-size: 40px; text-align: center;"
        document.getElementById('accuracy').style = "font-size: 40px; text-align: center;"
        document.getElementById('restart').style = "margin-bottom: 50px;"
    }
    return document.getElementById('timer').innerHTML = end-start;
  }

var timing = setInterval(chrono, 1000);

