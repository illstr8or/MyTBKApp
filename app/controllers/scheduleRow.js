var classSchedule = Alloy.Collections.schedules;
var args = arguments[0] || {};
//var model = args.model;
$.title.text = args.title;
//$.startTime.text = args.start;
var start = args.start;
var brTime = start.replace(" ","\n");
$.startTime.text = brTime;
// Create content elements here
