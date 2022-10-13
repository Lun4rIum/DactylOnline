

import {end} from './timer.js';

// Génerer des mots aléatoires
const url = "https://raw.githubusercontent.com/Lun4rIum/OnlineTypingTest/main/liste.txt"



var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send(null);
var response = xhr.responseText.replace(/\s/g, "\n");
var splitted = response.split("\n");

var min = 0;
var max = 22739;
min = Math.ceil(min);
max = Math.floor(max);


const wordlist = [];
export function generateWord(){
    
    
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
}

generateWord()

//document.getElementById('wordlist').innerText = wordlistStringSpace.toLowerCase()


var Frappe = 0;
var WPM = 0;
var Error = 0;

// Vérifie si le mot écrit est juste ou non 






var start = new Date().getTime() / 1000

var i=0
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if (document.getElementById('typing').value == wordlist[i]) {

            document.getElementsByClassName("words")[i].style = 'opacity: 100%; animation-name: FadeFrom30; animation-duration: 0.25s;';
            
            Frappe = Frappe + wordlist[i].length;
            i=i+1;

            document.getElementsByClassName("words")[29+i].style = "visibility: visible;"

            document.getElementById('typing').value = "";

            var WPMunfloatFrappe = parseFloat((Frappe/5))
            var WPMunfloatTime = (Cookies.get('timer') - parseInt(Math.trunc(end) - Math.trunc(start)))/60
            
            WPM = WPMunfloatFrappe / WPMunfloatTime
            document.getElementById("WPM").innerHTML = "WPM" + ": " + Math.trunc(WPM)

            var Accuracy = ((Frappe - Error) / Frappe) * 100
            document.getElementById("accuracy").innerHTML = "Accuracy" + ": " + Math.trunc(Accuracy)+"%"

            start = new Date().getTime() / 1000;
  

    } else {
        if (Cookies.get('autoDeleteWhenError') == 'True') {
            document.getElementsByClassName("words")[i].style = 'color: red; animation-duration: 0.25s; animation-name: FromWhiteToRed;';
            document.getElementById('typing').value = "";
            Error++
        } else {
        document.getElementsByClassName("words")[i].style = 'color: red; animation-duration: 0.25s; animation-name: FromWhiteToRed;';
        Error++
        };   
    };

  }
}




for (let j = 30; j < 300; j++) {
    document.getElementsByClassName("words")[j].style = "display: none;"
}


// il faut cacher les mots après le 75 et les afficher à chaque mot affichés


    
// restart le test 

document.getElementById('restart').onclick = function(){
    document.getElementById('typing').value = "";
    console.log("test")
    return location.reload();
};

// afficher une popup si le bouton d'aide est cliqué
var popup = "";
document.getElementById('help').onclick = function(){
    if (popup == ""){
        popup = "open"
        return document.getElementById("helpPopup").style = 'display: unset';
    } else{
        popup = ""
        return document.getElementById("helpPopup").style = 'display: none;';
    }
};


document.getElementById('github-footer').onclick = function(){
    window.open('https://github.com/Lun4rIum/DactylOnline', '_newtab');
}


var settings = ""
document.getElementById('settings').onclick = function(){
    if (settings == ""){
        settings = "open"
        return document.getElementById("settingsWindow").style = 'display: unset';
    } else{
        settings = ""
        return document.getElementById("settingsWindow").style = 'display: none;';
    }
}


var expiryDate = new Date();
expiryDate.setMonth(expiryDate.getMonth() + 1);

const checkbox = document.getElementById('autoDeleteWhenError')
checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        Cookies.set('autoDeleteWhenError', 'True', { expires: 30 })
    } else {
        Cookies.set('autoDeleteWhenError', 'False', { expires: 30 })
    }
  })

