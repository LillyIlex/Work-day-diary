$(document).ready(function () {

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
    function setInterval() {
        for (i = 0; i < textBox.length; i++) {
            var rowId = textArea[i].id

            if (rowId == currentTime) {
                //console.log(rowId[i] + ' present');
                textArea[i].classList.add('present');
            } else if (rowId < currentTime) {
                // console.log(rowId + ' past');
                textArea[i].classList.add('past');
            } else if (rowId > currentTime) {
                // console.log(rowId + ' future')
                textArea[i].classList.add('future');
            }
        } 1000;
    }

    //To store the values in the textarea using local storage

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var textEntry = $(this).siblings("textarea").val();
        var time = $(this).siblings("textarea").attr('id');
        localStorage.setItem(time, textEntry);



    });


});
$(function () {
    $("#9").append(localStorage.getItem("9"))
    $("#10").append(localStorage.getItem("10"))
    $("#11").append(localStorage.getItem("11"))
    $("#12").append(localStorage.getItem("12"))
    $("#13").append(localStorage.getItem("13"))
    $("#14").append(localStorage.getItem("14"))
    $("#15").append(localStorage.getItem("13"))
    $("#16").append(localStorage.getItem("16"))
    $("#17").append(localStorage.getItem("17"))

})
$(".clearBtn").on("click", function () {
    localStorage.clear()
    $("#9").val("")
    $("#10").val("")
    $("#11").val("")
    $("#12").val("")
    $("#13").val("")
    $("#14").val("")
    $("#15").val("")
    $("#16").val("")
    $("#17").val("")
});