module.exports = {
  name: "afk",
  description: "For telling that user is afk(Away From Keyboard)",
  execute(message, args) {
    if (args[0] === "afk") {
      message.channel.send(`${message.author} is afk...`);
    } else if (args[0] === "back") {
      message.channel.send(`${message.author} is back!`);
    }
  },
};
