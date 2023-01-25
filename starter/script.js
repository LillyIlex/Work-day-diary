


// Display the current day 

var datetime = null,
    date = null;

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

//var textArea = document.querySelector('.text-area')
//var timeStamp = document.querySelector('.timeStamp')

//target time stamp to compar with current hour in time checker
/*for (var i=0, i < timeSlot.length(), i++) {
    timeStamp = timeSlot[i].innerHTML
    append
}*/
/*
function timeChecker(currentHour, textArea) {
    var currentHour = moment().hours();
    var textArea = document.querySelectorAll('text-area'); 
   var timeSlot = document.querySelectorAll("span")
  console.log(timeSlot.dataset.number)

    for (i = 0; i < textArea.length; i++) {
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
timeChecker() */

var currentTime = moment().hours();
var textArea = $(".text-area");
var textBox = $(".textRow");
var testTime = 12

console.log(textBox)

for (i = 0; i < textBox.length; i++) {
    var rowId = textArea[i].id 
   // console.log(textArea[i].id)

    if (rowId == currentTime) {
        //console.log(rowId[i] + ' present');
        textArea[i].classList.add('present');
    } else if  (rowId < currentTime) {
       // console.log(rowId + ' past');
        textArea[i].classList.add('past')
    } else if (rowId > currentTime) {
       // console.log(rowId + ' future')
        textArea[i].classList.add('future')
    } //NOT WORKING, ALL DISPLAYING "PAST"
}


/*
var saveBtn = document.querySelector(".saveBtn")
textArea.textContent = ;

//Save the event in local storage when the save button is clicked in that timeblock (local storage)
var textEntry = localStorage.getItem("saveBtn");

//Allow a user to enter an event when they click a timeblock 
//(event.listeners on save button)

saveBtn.addEventListener("click", function() {
   textArea.textContent = saveBtn;
    localStorage.setItem("textEntry", textEntry);
}
)
//Persist events between refreshes of a page (local storage)

*/



//function to compare the presave item to the text area block so the write activity gets put on the right time


//To store the values in the textarea using local storage

 //To retain the textarea details after refresh. Getting dettails from local storage
/* $(function(){
    $("#9").val(localStorage.getItem("9am"));
    $("#10").val(localStorage.getItem("10am"));
    $("#11").val(localStorage.getItem("11am"));
    $("#12").val(localStorage.getItem("12pm"));
    $("#13").val(localStorage.getItem("1pm"));
    $("#14").val(localStorage.getItem("2pm"));
    $("15").val(localStorage.getItem("3pm"));
    $("16").val(localStorage.getItem("4pm"));
    $("17").val(localStorage.getItem("5pm"));
}); */



//event listner listens for button clicks then saves that text to the local storage 
