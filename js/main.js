var calendarDuration = 14;
var today = new Date();
//today = new Date(today.setDate(today.getDate() + 20));

$(document).ready(function() {
  var timer = setInterval(function() {
    $.ajax({
      url: "/js/getCalendar.js",
      type: "GET",
      success: function(data) {
        console.log(data.items);
        var events = data.items;
        $(".summary, .time").empty();
        if (events.length > 0) {
          for (i = 0; i < events.length; i++) {
            appendToDay(events[i]);
          }
        }
      },
      error: function(data) {
        console.log("error" + data);
      }
    });
  }, 3000);

  //Get first Sunday which is date=0
  var firstDayInCal = getDayDate(today, -today.getDay());
  var i;
  for (i = 0; i < 7; i++) {
    $(".calendar").append(
      $("<div>", { class: "dayName", text: dayToString(i) })
    );
  }

  //Create Squares of calendar
  for (i = 0; i < calendarDuration; i++) {
    var dateNumber = new Date(getDayDate(firstDayInCal, i)).getDate();
    var isWeekend =
      new Date(getDayDate(firstDayInCal, i)).getDay() == 0 ||
      new Date(getDayDate(firstDayInCal, i)).getDay() == 6;
    $(".calendar").append(
      $("<div>", { class: "day", id: dateNumber })
        .append(
          $("<div>", {
            class: "nb" + (isWeekend == true ? " weekend" : ""),
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
  startTime();
});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//Put Event in corresponding square on date=>id basis
function appendToDay(event) {
  if (event.start.dateTime === undefined) {
    //All day event
    var dateNumber = new Date(event.start.date).getDate() + 1;
  } else {
    //Given Time event
    var dateNumber = new Date(event.start.dateTime).getDate();
    var sTime = new Date(event.start.dateTime);
    var hours = sTime.getHours();
    var minutes = sTime.getMinutes();
    var startTime = hours + (minutes == 0 ? "h" : ":" + minutes);
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
