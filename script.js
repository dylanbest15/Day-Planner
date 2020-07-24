// current hour moment
var currentHour = moment().minutes(0).seconds(0);
console.log(currentHour.get('hour'));

// 4 hours ago moment
var fourHoursAgo = currentHour.subtract(4, 'hours');
console.log(fourHoursAgo.get('hour'));

var container = $("div.container");
var timeblock = $($("#timeblock").html());



for (var i = 0; i < 9; i++) {
    var hour = moment(i + 9, "HH");
    var newTimeblock = timeblock.clone();
    newTimeblock.find("div.hour p").text(hour.format("hA"));
    newTimeblock.find("textarea").attr("id", `textarea-${i+9}`);
    newTimeblock.find("button.saveBtn").attr("data-target", `textarea-${i+9}`);
    container.append(newTimeblock);
}


