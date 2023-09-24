// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var dateTime = dayjs();
var currentTime = dayjs().$H;
var saveButton = $('.saveBtn')
$('#currentDay').text(dateTime.format('MMMM D YYYY, h:mm:ss a'));

$(function () {
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
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

  function dailySchedule() {
    var timeblocks = $(".time-block")
    var currentHour = dayjs().$H
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
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