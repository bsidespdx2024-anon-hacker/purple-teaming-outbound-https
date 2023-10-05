class LoggingAgent extends https.Agent {
  createConnection(options, callback) {
    const socket = super.createConnection(options, callback);
    const wrappedWrite = socket.write
    socket.write = (...args) => {
      console.error("Sending:", args[0].toString());
      return wrappedWrite.apply(socket, args)
    }
    socket.on('data', (chunk) => {
      console.error("Receiving:", chunk.toString());
    });
    return socket;
  }
}
