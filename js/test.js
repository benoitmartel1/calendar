<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="FormatGoogleCalendar-master/dist/format-google-calendar.js"></script>
	<!--FormatGoogleCalendar Javascript file-- >
		<script src="FormatGoogleCalendar-master/dist/format-google-calendar.min.js"></script>

		<script>

			//declare calendar urls with calendar id and api key
			var calender1 = "https://www.googleapis.com/calendar/v3/calendars/$cal_id/events?key=$apikey";
			
			
			var calender2 = "https://www.googleapis.com/calendar/v3/calendars/$cal_id/events?key=$apikey";
			
			
			//store the calendar urls in an array
			
			
			var cals = [calender1,calender2];
			
			
			var CAL_ID ="";
			
			//loop through and get each calendar urls
			
			
for (j = 0; j < cals.length; j++) {


				CAL_ID = cals[j];
		
		
      formatGoogleCalendar.init({
				calendarUrl:CAL_ID,
			past: false,
			upcoming: true,
			pastTopN: 0,
			upcomingTopN: 10,
			itemsTagName: 'li',
			upcomingSelector: '#events-upcoming',
			pastSelector: '#events-past',
			upcomingHeading: 'Upcoming Events',
			pastHeading: '',
        format: ['<font style="color:#f44336; font-weight: bold; font-size: 28pt;">☞</font>&nbsp;&nbsp;<strong>', '*date*', '</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp; ', '*summary*', ' &mdash; ', '*description*', ' in ', '*location*']
		  }); 
	}
  </script>