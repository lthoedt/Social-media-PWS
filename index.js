// deze functies worden tegelijk gecalled onload
function allCaller() {
  time();
}

var dateSelector;
var navMonth;
var navYear;
var dateSelectorValue;
var splitString;
var dateSelectorDay;
var dateSelectorMonth;
var dateSelectorYear;

var richting = "uit";

var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
// function dateSelectorNavBar() {
//   dateSelector = document.getElementById('dateSelectorInput');
//   navMonth = document.getElementById('navMonth');
//   navYear = document.getElementById('navYear');
//   dateSelectorValue = dateSelector.value;
//   splitString2 = dateSelectorValue.split("|");
//   dateSelectorDay = splitString2[0];
//   dateSelectorMonth = splitString2[1];
//   dateSelectorYear = splitString2[2];
// }
//
// function dateSelectorNavBarLoop() {
//   dateSelectorNavBar();
//   navMonth.innerHTML = monthsArray[dateSelectorMonth - 1];
//   navYear.innerHTML = dateSelectorYear;
// }
// setInterval(dateSelectorNavBarLoop, 500);

//manier 2 (used)
//als je klikt dan blijft hij styled zodat je weet waar je zit
function typeSelectStyle2(type) {
  var selector = document.getElementById('nav');
  var todayA = document.getElementById('navTijdlijn');
  var monthA = document.getElementById('navBerichten');
  var yearA = document.getElementById('navProfiel');

  var today = document.getElementById('lijdlijn');
  var month = document.getElementById('liberichten');
  var year = document.getElementById('liprofiel');

  today.className = "";
  month.className = "";
  year.className = "";

  if (type == "tijdlijn") {
    today.className = "clicked";
  }

  if (type == "berichten") {
    month.className = "clicked";
  }

  if (type == "profiel") {
    year.className = "clicked";
  }
}

// function dateSelectorInputClicked(){
//   var selector = document.getElementById('dateSelectorInput');
//
//   if (selector.className == "") {
//     selector.className = "dateSelectorInputClicked";
//   }else if(selector.className == "dateSelectorInputClicked"){
//     selector.className = "";
//   }
// }

// if(window.innerWidth <= 600) {
//   function dateSelectorInputClicked(){
//     var selec = document.getElementById('datepicker');
//     if (selec.style.display == "none") {
//       selec.style.display = "flex";
//     }else{
//       selec.style.display = "none";
//     }
//   }
// }

// if(window.innerWidth <= 600) {
//   function dateSelectorInputClicked(){
//     var selec = document.getElementById('datepicker');
//     var icon = document.getElementById('dateSelectorIcon');
//     if (selec.style.transform == "translateX(-140%)") {
//       selec.style.transform = "translateX(170%)";
//       selec.style.opacity = "1";
//       icon.className = "fas fa-angle-right";
//       selec.style.transition = "all 200ms ease-in-out";
//       selec.style.opacity = "all 200ms ease-in-out";
//     }else{
//       selec.style.transform = "translateX(-140%)";
//       selec.style.opacity = "0";
//       icon.className = "fas fa-bars";
//       selec.style.transition = "all 200ms ease-in-out";
//       selec.style.opacity = "all 200ms ease-in-out";
//     }
//   }
// }

// function navBarPop() {
//   var navBar = document.getElementById('navBar');
//   if (navBar.style.transform == translate(-100%)){
//     navBar.style.transform = "translate(0%)";
//     navBar.style.transition = "all 300ms ease-out";
//     console.log("ja");
//   }else if(navBar.style.transform == "translate(0%)"){
//         navBar.style.transform = "translate(-100%)";
//         navBar.style.transition = "all 300ms ease-out";
//         console.log("nee");
//   }
// }

function navBarPop() {
  var navBar = document.getElementById('navBar');
  var icon = document.getElementById('dateSelectorIcon');
  if (richting == "uit") {
    navBar.style.transform = "translate(0%)";
    navBar.style.transition = "all 300ms ease-in-out";
    icon.className = "fas fa-angle-left";
    richting = "aan"
    console.log("ja");
  } else if (richting == "aan") {
    navBar.style.transform = "translate(-100%)";
    navBar.style.transition = "all 300ms ease-in-out";
    icon.className = "fas fa-bars";
    richting = "uit"
    console.log("nee");
  }
}

  // tijd functie

var hour;

function time() {
  // var date = date();
  var today = new Date();
  hour = today.getHours();
  var min = today.getMinutes();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var divTijd = document.getElementById('tijd');
  var divDatum = document.getElementById('datum');
  if (hour < 10 && min < 10) {
    divTijd.innerHTML = "0" + hour + " : " + "0" + min;
  } else if (hour < 10) {
    divTijd.innerHTML = "0" + hour + " : " + min;
  } else if (min < 10) {
    divTijd.innerHTML = hour + " : " + "0" + min;
  } else {
    divTijd.innerHTML = hour + " : " + min;
  }
  divDatum.innerHTML = dd + " " + monthsArray[mm - 1] + " " + yyyy;
}
