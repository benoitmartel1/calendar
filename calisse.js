// "use strict";

import ical from "ical";
import * as $ from "jquery";

console.log("Patof");
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


// ical.fromURL(
//   "https://calendar.google.com/calendar/ical/martel.b%40gmail.com/public/basic.ics", 
//     { mode: "no-cors" },
//   function(err, data) {
// 	  console.log(err);
//     console.log(data);
//     for (let k in data) {
//       if (data.hasOwnProperty(k)) {
//         var ev = data[k];
//         if (data[k].type == "VEVENT") {
//           //   console.log(
//           //     `${ev.summary} is in ${
//           //       ev.location
//           //     } on the ${ev.start.getDate()} of ${
//           //       months[ev.start.getMonth()]
//           //     } at ${ev.start.toLocaleTimeString("en-CA")}`
//           //   );
//         }
//       }
//     }
//   }
// );
$.ajax({
    type: 'GET',
	url: "https://calendar.google.com/calendar/ical/martel.b%40gmail.com/public/basic.ics",
    success: function (response) {
        console.log('Nice!')
    },
    error: function (response) {
        console.log('Bad!')
    }
});