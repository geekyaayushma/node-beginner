import events from "events";

const eventEmitter = new events.EventEmitter();

eventEmitter.on("greet", () => {
  console.log("Hello from the event!");
});

eventEmitter.emit("greet");
