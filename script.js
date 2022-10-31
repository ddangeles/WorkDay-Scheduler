var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var currentHour = moment().hour();

$(".time-block").each(function(){

    var eventHour = $(this).attr("id").split("-")[1];
    var textEntry = localStorage.getItem(eventHour);
    var textBlock = $(this).find(".description");

    textBlock.val (textEntry);

    if (eventHour < currentHour){
        $(this).find(".description").addClass("already-past");
    } else if(eventHour == currentHour){
        $(this).find(".description").addClass("current-hour");
    } else{
        $(this).find(".description").addClass("future-time");
     }
});


$(".saveBtn").on("click", function(){
    var hourEvent = $(this).parent().find(".description").val();
    var hour = $(this).parent().attr("id").split("-")[1];
   
    localStorage.setItem(hour, hourEvent);
}); 
