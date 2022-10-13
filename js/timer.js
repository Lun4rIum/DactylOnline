import {generateWord} from './script.js';








var start = parseInt(new Date().getTime() / 1000)
var end = parseInt((new Date().getTime() / 1000 )+ timer)


var now = new Date();
var time = now.getTime();
time += 3600 * 1000;
now.setTime(time);


let cookieValue = Cookies.get('timer')
var timer = parseInt(cookieValue);
end = parseInt((new Date().getTime() / 1000 )+ timer)

const url = window.location

function chrono() {
    
    start = parseInt(new Date().getTime() / 1000)
  

    
    document.getElementById('15').onclick = function(){
        timer=15
        Cookies.set('timer', 15, { expires: 1 })
        
        end = parseInt((new Date().getTime() / 1000 )+ timer)
        location.reload()
    
      };

      document.getElementById('30').onclick = function(){
          timer=30
          Cookies.set('timer', 30, { expires: 1 })
          
          end = parseInt((new Date().getTime() / 1000 )+ timer)
          location.reload()
      };

      document.getElementById('60').onclick = function(){
          timer=60
          end = parseInt((new Date().getTime() / 1000 )+ timer)
          Cookies.set('timer', 60, { expires: 1 })
          
          location.reload()
          
      };
     
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

export var end = end

var timing = setInterval(chrono, 1000);


if (Cookies.get('timer') == 60){
  document.getElementById("60").classList.toggle("selected");
} else if (Cookies.get('timer') == 30){
  document.getElementById("30").classList.toggle("selected");
} else if (Cookies.get('timer') == 15){
  document.getElementById("15").classList.toggle("selected");
} else {
  Cookies.set('timer', 60, { expires: 1 })
  location.reload()
}

