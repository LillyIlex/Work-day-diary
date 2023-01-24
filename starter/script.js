


// Display the current day 

var datetime = null,
    date = null;
var textRow = document.querySelector(".textRow")


var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
};
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

//Color-code each timeblock based on past, present, and future

//const currentHour = moment().hour()
//console.log(hour)

/*if (currentHour === moment().hour()) {
    textRow.addClass("present")
    console.log("present")
} else if (currentHour < moment().hour()) {
    textRow.addClass("past")
    textRow.removeClass("present")
    console.log("grey out")
} else {
    textRow.addClass("future")
    console.log("turn green")
} */
//GLOBAL VARS

var textArea = document.querySelector('.text-area')
var timeStamp = document.querySelector('.timeStamp')

//target time stamp to compar with current hour in time checker
/*for (var i=0, i < timeSlot.length(), i++) {
    timeStamp = timeSlot[i].innerHTML
    append
}*/

function timeChecker(currentHour, textArea) {
    var currentHour = moment().hours();
    var textArea = document.querySelectorAll('text-area'); 
   // var timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17]
   var timeSlot = document.querySelectorAll("span")
  console.log(timeSlot.dataset.number)

    for (i = 0; i < timeSlot.length; i++) {
        console.log(timeSlot[i])
        if (timeSlot[i] === currentHour) {
                 textArea.setAttribute('class', 'present');
                 console.log(currentHour)
                 console.log('Present time');
             }
        else if (currentHour > timeSlot[i]) {
            console.log('Past events');
            textArea.setAttribute('class','past');
            textArea.classList.remove('present');
        } else {
            // (currentHour < timeSlot[i]) {
            console.log('Future events');
            textArea.setAttribute('class', 'future');
            console.log(currentHour)
        }
        }
    }
timeChecker()


  



/*
//var textArea = document.querySelector("#text-area");
var saveBtn = document.querySelector(".saveBtn")
textArea.textContent = saveBtn;

//Save the event in local storage when the save button is clicked in that timeblock (local storage)
var textEntry = localStorage.getItem("saveBtn");

//Allow a user to enter an event when they click a timeblock 
(event.listeners on save button)

saveBtn.addEventListener("click", function() {
   textArea.textContent = saveBtn;
    localStorage.setItem("textEntry", textEntry);
}
)
//Persist events between refreshes of a page (local storage)


*/

      /*
      var hour9 = document.getElementById('time9')
      var hour10 = document.getElementById('timeStamp10')
      var hour11 = document.getElementById('timeStamp11')

var times = [
    {
        hour9 : 9,
        hour10 : 10,
        hour11 : 11
    } ]*/