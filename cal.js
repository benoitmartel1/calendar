"use strict";

import ical from "ical";

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
  "https://calendar.google.com/calendar/ical/martel.b%40gmail.com/public/basic.ics",
  //   { mode: "no-cors" },
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
