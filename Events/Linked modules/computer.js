import EventEmitter from "events";

const computerEmitter = new EventEmitter();

function connectComputer(name) {
  const info = { name };
  console.log(`💻 ${info.name} is trying to connect...`);
  computerEmitter.emit("connect", info);
}

export default computerEmitter;
export { connectComputer };
