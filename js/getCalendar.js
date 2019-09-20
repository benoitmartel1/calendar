const express = require("express");
const { google } = require("googleapis");
const app = express();
const port = 3000;
const credentials = require("../credentials.json");
const scopes = ["https://www.googleapis.com/auth/calendar.events.readonly"];
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);
var calendarDuration = 14;
const api = google.calendar({ version: "v3", auth: auth });
const calendarId = "martel.b@gmail.com";
//Get the day with an offset
function getDayDate(firstDay, offset) {
  var date = new Date(firstDay);
  var newDate = date.getDate() + offset;
  return new Date(date.setDate(newDate));
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-foo"
  );
  next();
});

// Make an authorized request to list Calendar events.

app.get("/", function(req, res) {
  var today = new Date();
  var endDate = new Date(getDayDate(today, calendarDuration));
  console.log(today);
  api.events.list(
    {
      calendarId: calendarId,
      timeMin: today.toISOString(),
      timeMax: endDate.toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: "startTime"
    },
    function(err, resp) {
      if (err) {
        throw err;
      } else {
        return res.send(resp.data);
      }
    }
  );
});
app.listen(port, () => console.log("Listening to : http://localhost:" + port));
