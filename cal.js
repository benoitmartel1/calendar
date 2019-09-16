"use strict";

const ical = require("ical");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

ical.fromURL(
  "https://calendar.google.com/calendar/ical/martel.b%40gmail.com/private-327e283d3a084fbaa7ee16a3f5e30468/basic.ics",
  {},
  function(err, data) {
    console.log(Object.keys(data).length);
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == "VEVENT") {
          //   console.log(
          //     `${ev.summary} is in ${
          //       ev.location
          //     } on the ${ev.start.getDate()} of ${
          //       months[ev.start.getMonth()]
          //     } at ${ev.start.toLocaleTimeString("en-CA")}`
          //   );
        }
      }
    }
  }
);
