


// Display the current day 

var datetime = null,
        date = null;
var textRow = document.querySelector(".textRow")

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

var notTime= 15
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

function timeChecker(currentHour, textRow) {
    var currentHour = moment().hours()
    if (currentHour === currentHour) {
        textRow.addClass('present');
        console.log('Present time');
    } else if (currentHour > hour) {
        console.log('Past events');
        textRow.addClass('past');
        textRow.removeClass('present');
    } else {
        console.log('Future events');
        textRow.addClass('future');
    }
    //timeChecker()
}



//Allow a user to enter an event when they click a timeblock (event.listeners on save button)
saveBtn.addEventListener("click",  )

//Save the event in local storage when the save button is clicked in that timeblock (local storage)

//Persist events between refreshes of a page (local storage)


//