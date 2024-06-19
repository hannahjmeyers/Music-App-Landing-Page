//All icons from: 
  //https://icons8.com/icons  

//Resources utilized for innerHTML property: 
  //https://stackoverflow.com/questions/53269247/image-doesnt-display-inside-innerhtml
  //https://www.w3schools.com/jsref/prop_html_innerhtml.asp


//Function for user's first and last name
function userName () {
  var firstName = "";
  var lastName = "";
  var name = "";
  var loopFirstName = true;
  var loopLastName = true;

  var nameinject = document.getElementById('username');
  nameinject.innerHTML = "";
  var div = document.createElement('div');

  //Preventing users from blank names
  while (loopFirstName) {
    firstName = prompt("What's your first name?");
      if (firstName === "") {
        alert("Please enter your first name.");

      } else {
        while (loopLastName) {
         lastName = prompt("What is your last name?");
          if (lastName === "") {
            alert("Please enter your last name.");
          } else {
            loopLastName = false; 
            loopFirstName = false;
          }
        }
      }
  }
  name = firstName + ' ' + lastName;

  //Injects input into HTML
  div.innerHTML = name; 
  document.getElementById('username').appendChild(div);

  document.getElementById('usernamebtn').style.visibility = "hidden";

}

//Function to allow user to pick (rough) gender identity
function userIcon () {
  var icon = document.getElementById("usericon");
  icon.innerHTML = "";
  var div = document.createElement(div);
  var loopIcon = true;

  while(loopIcon) {
    icon = prompt("Please pick from a male, female, or gender neutral icon.").toLowerCase();
      if (icon === "male") {
        div.innerHTML = '<img src="' + "images/maleicon.png" + '">';
        document.getElementById('usericon').appendChild(div);
        loopIcon = false;

      } else if (icon === "female") {
        div.innerHTML = '<img src="' + "images/femaleicon.png" + '">';
        document.getElementById('usericon').appendChild(div);
        loopIcon = false;

      } else if (icon === "neutral" || icon === "gender neutral") {
        div.innerHTML = '<img src="' + "images/neutralicon.png" + '">';
        document.getElementById('usericon').appendChild(div);
        loopIcon = false;

      } else {
        alert("Please pick from male, female, or gender neutral.");
        }
  }
  document.getElementById('usericonbtn').style.visibility = "hidden";
}
//Function to allow user to show mood
function userMood () {
  var mood = document.getElementById('usermood');
  mood.innerHTML = "";
  var div = document.createElement('div');
  var loopMood = true;

  //Setting mood to correlate with weather-related icons
  while(loopMood) {
  mood = prompt("What's your mood?\n(Happy, Angry, Sad, Stressed, Normal").toLowerCase();
    if (mood === "happy") {
        div.innerHTML = '<img src="' + "images/icons8-sun.gif" + '">';
        document.getElementById('usermood').appendChild(div);
        loopMood = false;

      } else if (mood === "angry") {
        div.innerHTML = '<img src="' + "images/icons8-lightning.gif" + '">';
        document.getElementById('usermood').appendChild(div);
        loopMood = false;

      } else if (mood === "sad") {
        div.innerHTML = '<img src="' + "images/icons8-rain.gif" + '">';
        document.getElementById('usermood').appendChild(div);
        loopMood = false;

      } else if (mood === "stressed") {
        div.innerHTML = '<img src="' + "images/icons8-windy-weather.gif" + '">';
        document.getElementById('usermood').appendChild(div);
        loopMood = false;

      } else if (mood === "normal") {
        div.innerHTML = '<img src="' + "images/partlycloudy.gif" + '">';
        document.getElementById('usermood').appendChild(div);
        loopMood = false;

      } else {
        alert("Please enter a valid mood!");
      }
  }

  document.getElementById('usermoodbtn').style.visibility = "hidden";
}

//Function to let user pick their main instrument and display on blog
function userInstrument () {
  var instrument = "";
  instrument = document.getElementById('userinstrument');
  instrument.innerHTML = "";
  var div = document.createElement('div');
  var loopInst = true;

  //Icons correlated to user's input
  while(loopInst) {
    instrument = prompt("What is your main instrument?\nPlease pick from guitar, drums, piano, singer, or violin.\nType \'none\' to bypass!").toLowerCase();
      if (instrument === "guitar" || instrument === "acoustic guitar" || instrument === "electric guitar") {
        div.innerHTML = '<img src="' + "images/guitaricon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "bass guitar") {
        div.innerHTML = '<img src="' + "images/bassguitaricon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "drums"){ 
        div.innerHTML = '<img src="' + "images/drumsicon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "piano") {
        div.innerHTML = '<img src="' + "images/pianoicon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "microphone" || instrument === "singer"){
        div.innerHTML = '<img src="' + "images/microphoneicon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "violin") {
        div.innerHTML = '<img src="' + "images/violinicon.png" + '">';
        document.getElementById('userinstrument').appendChild(div);
        loopInst = false;

      } else if (instrument === "none") {
        loopInst = false;
      
      } else {
        alert("Please enter a valid instrument!");
      }
    } 
  return(instrument);
  }

//Function to calculate the amount of time a user has played && display fun message
function timePlayed () {
  var currentYear = new Date().getFullYear();
  var startYear = 0;
  var userTimePlayed = 0;
  var injectedTime = "";
  injectedTime = document.getElementById('usertimeplayed');
  injectedTime.innerHTML = "";
  var div = document.createElement('div');
  var timeLoop = true;

  while(timeLoop) {
    startYear = Number(prompt("What year did you start your main instrument?"));
     
    userTimePlayed = currentYear - startYear;

      if (userTimePlayed >= 5 && userTimePlayed < 10) {
        div.innerHTML = ("This user is an expert at their craft.\n They've played for " + userTimePlayed + " years.");
        document.getElementById('usertimeplayed').appendChild(div);
        timeLoop = false;

      } else if (userTimePlayed > 1 && userTimePlayed < 5) {
        div.innerHTML = ("This user is slaying at their craft.\n They've played for " + userTimePlayed + " years.");
        document.getElementById('usertimeplayed').appendChild(div);
        timeLoop = false;

      } else if (userTimePlayed >= 10 && userTimePlayed < 20) {
        div.innerHTML = ("This user has mastered their craft.\n They've played for " + userTimePlayed + " years.");
        document.getElementById('usertimeplayed').appendChild(div);
        timeLoop = false;

      } else if (userTimePlayed <= 1 && userTimePlayed > 0) {
        div.innerHTML = ("This user has just started to play.\n They've played for " + userTimePlayed + " years.");
        document.getElementById('usertimeplayed').appendChild(div);
        timeLoop = false;

      } else if (userTimePlayed >= 20 && userTimePlayed <= 100) {
        div.innerHTML = ("This user is a wizard at their craft.\n They've played for " + userTimePlayed + " years.");
        document.getElementById('usertimeplayed').appendChild(div);
        timeLoop = false;

      } else if (isNaN(userTimePlayed)) {
        alert("Please enter a number!");

      } else {
        alert("Please enter a valid start year!");
      }
      
  }
  //Hide button after input
  document.getElementById('userinstrumentbtn').style.visibility = "hidden";
  return(userTimePlayed);
}

//Function to calculate user's age
function userBirthday () {
  var birthYear = 0;
  var birthMonth = 0;
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  var loopMonth = true;
  var loopAge = true;
  var age = 0;

  var userBirthday = document.getElementById('userbirthday');
  userBirthday.innerHTML = "";
  var div = document.createElement(div);

 //Year and age calculation
  while (loopAge) {
    birthYear = Number(prompt("What year were you born?"));
      age = currentYear - birthYear;
      if (age <= 13 && age >= 0) {
        alert("We require users to be older than 13.");

      } else if (age > 100 || age <= 0) {
        alert("Please enter a valid age.");

      } else if (isNaN(birthYear)) {
        alert("Please enter a number!");
      }
        else {
        loopAge = false;
      }
  }
  //Month
  while (loopMonth) {
    birthMonth = Number(prompt("What month were you born?\n(1-12)"));
      if (birthMonth >= 1 && birthMonth <= 12) {
        loopMonth = false;

      } else if (birthMonth < 1 || birthMonth > 12) {
        alert("Please enter a valid month number. 1-12");

      } else if (isNaN(birthMonth)) {
        alert("Please enter a number!");
      }
    }

  //Display true age
  if (birthMonth > currentMonth) {
    age--;
  }

  div.innerHTML = ("Age: " + age);
  document.getElementById('userbirthday').appendChild(div);

  document.getElementById('userbirthdaybtn').style.visibility = "hidden";
  return(age);
}
/*function comparison (x, y) {
  if (y > x) {
    alert("I just want to understand how to fuckihgn code.");
  }
}
comparison(timePlayed(), userBirthday());*/

//Function to show the user's favorite song for the week
function userWeeklySong () {
  var song = "";
  var loopSong = true;
  var artist = "";
  var loopArtist = true; 
  
  //innerHTML variables
  song = document.getElementById('userweeklysong');
  song.innerHTML = "";
  var div = document.createElement(div);

  while (loopSong) {
    song = prompt("What's your favorite song this week?");
      if (song === "") {
        alert("Please enter the song name.");
      } else {
        while (loopArtist) {
         artist = prompt("What is the artist's name?");
          if (artist === "") {
            alert("Please enter the artist's name.");
          } else {
            loopArtist = false; 
            loopSong = false;
          }
        }
      }
    }
   document.getElementById('usersongbtn').style.visibility = "hidden";

  div.innerHTML = "User's SoTW:\n " + song + " by\n " + artist + ".";
  document.getElementById('userweeklysong').appendChild(div);
}

//Function to allow user to make a blog post
function blogPost () {
  var blogText = "";
  blogText = document.getElementById('blogtext');
  blogText.innerHTML = prompt("What is your post?\nPlease use spaces between words!");

  document.getElementById('textbox1').style.display = "none";
}


//Function to change background color on click
//Thanks to: 
  //https://stackoverflow.com/questions/38003099/change-color-using-queryselector
  //https://www.geeksforgeeks.org/how-to-change-the-color-of-html-element-in-javascript/

function changeBackground() {
  var btn0 = document.getElementById('defaultbtn');
  var btn1 = document.getElementById('redbtn');
  var btn2 = document.getElementById('bluebtn');
  var btn3 = document.getElementById('orangebtn');
  var btn4 = document.getElementById('purplebtn');
  var btn5 = document.getElementById('pinkbtn');

  //Default theme
  btn0.addEventListener('click', function OnClick(event){
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/background.jpg')";
    document.querySelector('nav').style.backgroundColor = '';
    document.querySelector('.boxshadow').style.boxShadow = '';
    document.querySelector('.linkcontainer').style.backgroundColor = '';
  });

  //Red theme
  btn1.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'red';
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/redgradient.jpg')";
    document.querySelector('nav').style.backgroundColor = '#CA3433';
    document.querySelector('.boxshadow').style.boxShadow = '18px 18px 18px 18px black';
    document.querySelector('.linkcontainer').style.backgroundColor = '#CA3433';
  });

  //Blue theme
  btn2.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'blue';
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/darkgradientblue.jpg')";
    document.querySelector('nav').style.backgroundColor = '#5293BB';
    document.querySelector('.boxshadow').style.boxShadow = '10px 10px 10px 10px rgba(211,211,211,0.5)';
    document.querySelector('.linkcontainer').style.backgroundColor = '#5293BB';
  });

  //Orange theme
  btn3.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'orange';
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/orangebackground.jpg')";
    document.querySelector('nav').style.backgroundColor = '#99431F';
    document.querySelector('.boxshadow').style.boxShadow = '10px 10px 10px 10px rgba(255,255,255,0.7)';
    document.querySelector('.linkcontainer').style.backgroundColor = '#99431F';
  });

  //Purple theme
  btn4.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'purple';
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/purplegradient.jpg')";
    document.querySelector('nav').style.backgroundColor = '#957DAD';
    document.querySelector('.boxshadow').style.boxShadow = '10px 10px 10px 10px rgba(0,0,0,0.7)';
    document.querySelector('.linkcontainer').style.backgroundColor = '#957DAD';
  });

  //Pink theme
  btn5.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'pink';
    document.querySelector('.changeColorFunction').style.backgroundImage = "Url('images/pinkgradient.jpg')";
    document.querySelector('nav').style.backgroundColor = '#e9658d';
    document.querySelector('.boxshadow').style.boxShadow = '10px 10px 10px 10px rgba(0,0,0,0.7)';
    document.querySelector('.linkcontainer').style.backgroundColor = '#e9658d';
  });
}