import json
from icalendar import Calendar, Event

summary = []
test2 = []
g = open('iWiseCalendar.ics','rb')
gcal = Calendar.from_ical(g.read())
for component in gcal.walk():
	if component.name == "VEVENT":
		testiboi = component.get('summary')
		if not "Tutor" in testiboi and not "Duty" in testiboi:
			summary.append(component.get('summary'))		
		# test2.append(component.get('description'))
g.close()

# Manipulate data to be useful
summary = set(summary)
summary = sorted(summary)
summary = [i.split() for i in summary]

# Write data into separate files
period = [i[0][0][0] for i in summary]
year = [i[1][0:2] for i in summary]
subject = [i[1][2:] for i in summary]
room = [i[3] for i in summary]

# Write data to .txt file
with open("summary.txt", 'w') as file:
	for i in summary:
		file.write("%s\n" % i)

with open('periods.json', 'w') as outfile:
	json.dump(period, outfile)

with open('year.json', 'w') as outfile:
	json.dump(year, outfile)

with open('subject.json', 'w') as outfile:
	json.dump(subject, outfile)

with open('room.json', 'w') as outfile:
	json.dump(room, outfile)

# Do events later
# with open("desc.txt", 'w') as file:
# 	for i in test2:
# 		if not i == "    cover work: ":
# 			file.write("%s\n" % i)