var calendarDuration = 14;
var today = new Date();
// today = new Date(today.setDate(today.getDate() + 20));

$(document).ready(function() {
  var i;

  //Get first Sunday which is date=0
  var firstDayInCal = getDayDate(today, -today.getDay());

  for (i = 0; i < 7; i++) {
    $(".calendar").append(
      $("<div>", { class: "dayName", text: dayToString(i) })
    );
  }

  //Create Squares of calendar
  for (i = 0; i < calendarDuration; i++) {
    var dateNumber = new Date(getDayDate(firstDayInCal, i)).getDate();
    $(".calendar").append(
      $("<div>", { class: "day", id: dateNumber })
        .append(
          $("<div>", {
            class: "nb",
            text: dateNumber
          })
        )
        .append(
          $("<div>", {
            class: "time"
          })
        )
        .append(
          $("<div>", {
            class: "summary"
          })
        )
    );
  }
  $(".month").text(monthToString(today.getMonth()));
});

//Put Event in corresponding square on date=>id basis
function appendToDay(event) {
  if (event.start.dateTime === undefined) {
    //All day event
    var dateNumber = new Date(event.start.date).getDate() + 1;
  } else {
    //Given Time event
    var dateNumber = new Date(event.start.dateTime).getDate() + 1;
    var sTime = new Date(event.start.dateTime);
    var hours = sTime.getHours();
    var minutes = sTime.getMinutes();
    var startTime = hours + ":" + minutes;
  }

  //var when = event.start.dateTime;
  if (startTime) {
    $("#" + dateNumber + " .time").append(startTime);
  }
  $("#" + dateNumber + " .summary").append(event.summary);
}

//Get the day with an offset
function getDayDate(firstDay, offset) {
  var date = new Date(firstDay);
  var newDate = date.getDate() + offset;
  return new Date(date.setDate(newDate));
}

function monthToString(idx) {
  // $day = array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
  var month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];

  return month[idx].charAt(0).toUpperCase() + month[idx].slice(1);
}
function dayToString(idx) {
  var day = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];

  return day[idx].charAt(0).toUpperCase();
}
