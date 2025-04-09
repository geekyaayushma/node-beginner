import events from "events";

const myEmitter = new events.EventEmitter();

myEmitter.once("Connected", (Server) => {
  console.log(`Server is connected ${Server.Name}`);
});

const Computer = {
  Name: "XYZ",
};

myEmitter.emit("Connected", Computer);
