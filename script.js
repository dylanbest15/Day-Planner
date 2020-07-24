// variables
var container = $("div.container");
var timeblock = $($("#timeblock").html());
var currentHour = moment().hour();

// create current date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDay);

// create time blocks
for (var i = 0; i < 9; i++) {

    var hour = moment(i + 9, "HH");
    var newTimeblock = timeblock.clone();

    // hour block
    newTimeblock.find("div.hour p").text(hour.format("hA"));

    // text area
    newTimeblock.find("textarea")
        .attr("id", `textarea-${i+9}`)
        .text(JSON.parse(localStorage.getItem(`textarea-${i+9}`)));

    // color coding for past present future
    if (i + 9 < currentHour) {
        newTimeblock.find("textarea").addClass("past");
    }
    else if (i + 9 > currentHour) {
        newTimeblock.find("textarea").addClass("future");
    }
    else {
        newTimeblock.find("textarea").addClass("present");
    }

    // save button
    newTimeblock.find("button.saveBtn").attr("data-target", `textarea-${i+9}`);

    // append to container
    container.append(newTimeblock);
}

// save button click event
$(document).on("click", "button.saveBtn", function() {

    // target corresponding text area
    var target = $(this).attr("data-target");

    // save input to local storage
    var input = $(document.getElementById(target)).val();
    localStorage.setItem(target, JSON.stringify(input));
})

