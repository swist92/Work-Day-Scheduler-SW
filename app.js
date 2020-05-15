const date = moment().format("dddd, MMMM Do, YYYY h:mm A");
$("#currentDay").text(date);


$(".time-block").each(function () {
  const currentHour= parseInt(moment().format("H"));
  const hour = parseInt($(this).attr("data-hour"));
  console.log(hour);

  if(hour < currentHour){
    $(this).find("textarea").addClass("past")

  }else if(hour >currentHour){
    $(this).find("textarea").addClass("future")
      
  }else {
    $(this).find("textarea").addClass("present")
} 
  console.log(hour, currentHour);
});

$("#9AM").val(localStorage.getItem("9AM"));
$("#10AM").val(localStorage.getItem("10AM"));
$("#11AM").val(localStorage.getItem("11AM"));
$("#12PM").val(localStorage.getItem("12PM"));
$("#1PM").val(localStorage.getItem("1PM"));
$("#2PM").val(localStorage.getItem("2PM"));
$("#3PM").val(localStorage.getItem("3PM"));
$("#4PM").val(localStorage.getItem("4PM"));
$("#5PM").val(localStorage.getItem("5PM"));

$(".saveBtn").on("click", function(){
  let time = $(this).siblings('textarea').attr('id');
  let savedEvent = $(this).siblings('textarea').val();
  localStorage.setItem(time, savedEvent);
  
});

// function render() {
//     for (let i = 0; i < 24; i++) {
//         const oneEvent = localStorage.getItem(i);
//         $("#" + i).text(oneEvent);



// Create a simple calendar application that allows the user to save events for each hour of the day.
// This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist