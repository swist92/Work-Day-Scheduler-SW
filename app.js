const date = moment().format("dddd, MMMM Do, YYYY");
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


$(".saveBtn").on("click", function(){
  let time = $(this).siblings('textarea').attr('id');
  let savedEvent = $(this).siblings('textarea').val();
  localStorage.setItem(time, savedEvent);
  
});


$("#9AM").val(localStorage.getItem("9"));
$("#10AM").val(localStorage.getItem("10"));
$("#11AM").val(localStorage.getItem("11"));
$("#12PM").val(localStorage.getItem("12"));
$("#1PM").val(localStorage.getItem("13"));
$("#2PM").val(localStorage.getItem("14"));
$("#3PM").val(localStorage.getItem("15"));
$("#4PM").val(localStorage.getItem("16"));
$("#5PM").val(localStorage.getItem("17"));


// const $row = $("<div class='row'>");
// $(".container").append($row):





















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