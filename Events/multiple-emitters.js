import events from "events";

const computerEvents = new events.EventEmitter();
const printerEvents = new events.EventEmitter();

computerEvents.on("Computer", function () {
  console.log(`Working properly`);
});

printerEvents.on("Printer", function () {
  console.log("Printer is also working properly");
});

computerEvents.emit("Computer");
printerEvents.emit(`Printer`);
