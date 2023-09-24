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
var currentTime = dayjs().$H;
var saveButton = $('.saveBtn')
$('#currentDay').text(dateTime.format('MMMM D YYYY, h:mm:ss a'));


$(function () {

  saveButton.each(function (index, element) {
    element.addEventListener('click', function (event) {
      console.log(event.target.getAttribute('data-id'))
      var textArea = document.getElementById(event.target.getAttribute('data-id'))
      console.log(textArea.value)
      localStorage.setItem(event.target.getAttribute('data-id'), textArea.value)
    });
  })

  function populateTextArea() {
    var textAreas = $('textarea')
    textAreas.each(function (index, textArea) {
      var text = localStorage.getItem(textArea.getAttribute('id'))
      textArea.value = text
    })
  }
  populateTextArea();
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


  function dailySchedule() {
    var timeblocks = $(".time-block")
    var currentHour = dayjs().$H

    for (var i = 0; i < timeblocks.length; i++) {
      var hour = Number(timeblocks[i].getAttribute('data-hour'))
      if (currentHour - hour == 0) {
        timeblocks[i].classList.add('present')
      }
      else if (currentHour - hour < 0) {
        timeblocks[i].classList.add('future')
      }
      else {
        timeblocks[i].classList.add('past')
      }
    }
  }
  dailySchedule()
  setInterval(dailySchedule, 600000)
});