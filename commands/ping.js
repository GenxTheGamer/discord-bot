module.exports = {
  name: "ping",
  description: "this is a ping command.",
  execute(message, args) {
    message.channel.send("pinging").then((m) => {
      m.edit(
        `🏓Latency is ${
          m.createdTimestamp - message.createdTimestamp
        }ms. API Latency is ${Math.round(client.ws.ping)}ms`
      );
    });
  },
};
