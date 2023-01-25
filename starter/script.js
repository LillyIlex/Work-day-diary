
//GLOBAL VARS
var currentTime = moment().hours();
var textArea = $(".text-area");
var textBox = $(".textRow");
var testTime = 12
//console.log(textBox)

// DATE & TIME FROM MOMENT.JS
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

for (i = 0; i < textBox.length; i++) {
    var rowId = textArea[i].id

    if (rowId == currentTime) {
        //console.log(rowId[i] + ' present');
        textArea[i].classList.add('present');
    } else if  (rowId < currentTime) {
       // console.log(rowId + ' past');
        textArea[i].classList.add('past')
    } else if (rowId > currentTime) {
       // console.log(rowId + ' future')
        textArea[i].classList.add('future')
    } 
}

//To store the values in the textarea using local storage

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
 var textEntry = $("textarea").val();
 localStorage.setItem("textEntry", textEntry);
console.log(textEntry)
$(".saveBtn").val(localStorage.getItem(textEntry))
})

//Persist events between refreshes of a page 

 //To retain the textarea details after refresh. Getting dettails from local storage
/* $(function(){
    $("#9").val(localStorage.getItem("9am"));
*/