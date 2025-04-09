export default function attachMonitorEvents(emitter) {
  emitter.on("connect", (info) => {
    console.log(`🖥️ Monitor: ${info.name} is now connected.`);
  });
}
