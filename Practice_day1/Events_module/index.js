const EventEmmiter = require("events");
const event = new EventEmmiter();

event.on("cheakpage", (sc, msg) => {
    console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit("cheakpage", 200, "ok");