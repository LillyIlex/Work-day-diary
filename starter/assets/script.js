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
//      console.log(time + textEntry)

       $(this).val(localStorage.getItem(time, textEntry))
       
       
       $(function () {
            $("#9").val(localStorage.getItem("9am"));
            $("#10").val(localStorage.getItem("10am"));
            $("#11").val(localStorage.getItem("11am"));
            $("#12").val(localStorage.getItem("12pm"));
            $("#13").val(localStorage.getItem("13pm"));
            $("#14").val(localStorage.getItem("14pm"));
            $("#15").val(localStorage.getItem("15pm"));
            $("#16").val(localStorage.getItem("16pm"));
            $("#17").val(localStorage.getItem("17pm"));


        })
        // save in localStorage
        //Persist events between refreshes of a page 

        //To retain the textarea details after refresh. Getting dettails from local storage
        /*
        */
    });
});