// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//----------------------------------------------------------------------------//

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateTime = dayjs();
var currentTime = dayjs();
var saveButton = $('.btn saveBtn col-2 col-md-1')
var nineOclock = $('#hour-9');
var tenOclock = $('#hour-10');
var elevenOclock = $('#hour-11');
var twelveOclock = $('#hour-12');
var oneOclock = $('#hour-1');
var twoOclock = $('#hour-2');
var threeOclock = $('#hour-3');
var fourOclock = $('#hour-4');
var fiveOclock = $('#hour-5');




$('#currentDay').text(dateTime.format('MMMM D YYYY, h:mm:ss a'));
$('#currentHour').text(currentTime.format('h'))

// if (currentHour != )

$(function () {

  saveButton.on('click', function (){
    alert('good job')
  });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //



  
  //array.each currenthour-timeblock =0 present -1 future else past
  //figure out how to make each time block hour have a set comparable value i.e. 9am=9
  
  var workingHours = "9, 10, 11, 12, 1, 2, 3, 4, 5"
  $('#currentHour').text(currentTime.format('h'))

  function dailySchedule() {
    var timeblocks = $(".time-block")
    
    for (var i = 0; i < timeblocks.length; i++) {
      var currentHour = workingHours[i];      
    }
    if (currentHour-timeblock == 0) { 
      
      timeblocks('.present');
    }
    if (currentHour-timeblock < 0) {
      //assign future styling 
    };
    if (currentHour-timeblock > 0) {
      //assign past styling
    }

  }
});