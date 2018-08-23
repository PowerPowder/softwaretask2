from icalendar import Calendar, Event

g = open('iWiseCalendar.ics','rb')
gcal = Calendar.from_ical(g.read())
for component in gcal.walk():
	if component.name == "VEVENT":
		print(component.get('summary'))
#		print(component.get('description'))
g.close()