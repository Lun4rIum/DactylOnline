// Génerer des mots aléatoires

const url = "https://raw.githubusercontent.com/Lun4rIum/OnlineTypingTest/main/liste.txt"

var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send(null);
var response = xhr.responseText;
var splitted = response.split("\n");

var min = 0;
var max = 22739;
min = Math.ceil(min);
max = Math.floor(max);


const wordlist = [];
for (let x = 0; x < 300; x++) {
    var random = Math.floor(Math.random() * (max - min) + min);
    wordlist.push(splitted[random].toLowerCase());

    var tag = document.createElement("p"); // <p></p>
    
    var text = document.createTextNode(wordlist[x]); 
    tag.appendChild(text);
    tag.classList.add('words');
    tag.setAttribute('id','word'+x);
    var element = document.getElementById("wordlist-parent");
    element.appendChild(tag);
  }



//document.getElementById('wordlist').innerText = wordlistStringSpace.toLowerCase()


var Frappe = 0;
var WPM = 0;
var Error = 0;

// Vérifie si le mot écrit est juste ou non 





const end = (new Date().getTime() / 1000 )+ 60
var start = new Date().getTime() / 1000

var i=0
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if (document.getElementById('typing').value == wordlist[i]) {
            console.log("oui !");
            document.getElementsByClassName("words")[i].style = 'opacity: 100%; animation-name: FadeFrom30; animation-duration: 0.25s;';
            


            Frappe = Frappe + wordlist[i].length;
            i=i+1;

            document.getElementsByClassName("words")[29+i].style = "visibility: visible;"

            document.getElementById('typing').value = "";

            var WPMunfloatFrappe = parseFloat((Frappe/5))
            var WPMunfloatTime = (60 - parseInt(Math.trunc(end) - Math.trunc(start)))/60

            console.log(WPMunfloatFrappe, WPMunfloatTime)
            WPM = WPMunfloatFrappe / WPMunfloatTime
            document.getElementById("WPM").innerHTML = Math.trunc(WPM)
            start = new Date().getTime() / 1000
  

    } else {
        document.getElementsByClassName("words")[i].style = 'color: red; animation-duration: 0.25s; animation-name: FromWhiteToRed;';
        Error++
    }

  }
}



console.log(Math.trunc(end) - Math.trunc(start))
for (let j = 30; j < 300; j++) {
    document.getElementsByClassName("words")[j].style = "visibility: hidden;"
}


// il faut cacher les mots après le 75 et les afficher à chaque mot affichés


    
// calcul finalement les wpm


