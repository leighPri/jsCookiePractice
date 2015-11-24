//Holds selector IDs since I'm not using Jquery
var startBut = document.getElementById("startBut");
var loadBut = document.getElementById("loadBut");
var saveBut = document.getElementById("saveBut");
var deleteBut = document.getElementById("deleteBut");
var clearBut = document.getElementById("clearBut");
var outputArea = document.getElementById("outputArea");

//holds session answer variables
var nameAnswer;
var cookieAnswer;
var colorAnswer;
var ageAnswer;

//cookie set function
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//asks question, stores answers in session variables, prints answers out to text area
startBut.onclick = function() {
  nameAnswer = prompt("What's your name?");
  cookieAnswer = prompt("What's your favorite cookie?");
  colorAnswer = prompt("What's your favorite color?");
  ageAnswer = prompt("How old are you?");
  outputArea.value = "Name: " + nameAnswer + "\nCookie: " + cookieAnswer + "\nColor: " + colorAnswer + "\nAge: " + ageAnswer;
};

//parses cookies into js-readable format and stores the information in session variables
loadBut.onclick = function() {
  var cookieHolder = "{" + document.cookie;
  cookieHolder = cookieHolder.replace(/=/g, ":\"");
  cookieHolder = cookieHolder.replace(/;/g, "\",");
  cookieHolder += "\"}";
  cookieHolder = eval("("+cookieHolder+")")
  nameAnswer = cookieHolder.name;
  cookieAnswer = cookieHolder.cookie;
  colorAnswer = cookieHolder.color;
  ageAnswer = cookieHolder.age;
  outputArea.value = "Name: " + nameAnswer + "\nCookie: " + cookieAnswer + "\nColor: " + colorAnswer + "\nAge: " + ageAnswer;
};

//save answers to cookies
saveBut.onclick = function() {
  setCookie("name", nameAnswer, 365);
  setCookie("cookie", cookieAnswer, 365);
  setCookie("color", colorAnswer, 365);
  setCookie("age", ageAnswer, 365);
};

//clears text area
clearBut.onclick = function() {
  outputArea.value = "";
};

//deletes cookies
deleteBut.onclick = function() {
  setCookie("name", "", -1);
  setCookie("cookie", "", -1);
  setCookie("color", "", -1);
  setCookie("age", "", -1);
};
