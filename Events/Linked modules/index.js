import computerEmitter, { connectComputer } from "./computer.js";
import attachMonitorEvents from "./monitor.js";

attachMonitorEvents(computerEmitter);
connectComputer("Office-PC");
