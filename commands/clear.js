module.exports = {
  name: "clear",
  description: "Clear Messages depending on user input",
  async execute(message, args) {
    if (!args[0])
      return message.channel.send(
        "Enter amount of messages you want to clear."
      );
    if (isNaN(args[0])) return message.channel.send("Enter a real number.");

    if (args[0] > 100)
      return message.channel.send("You cannot delete more than 100 messages.");

    if (args[0] > 100)
      return message.channel.send("You need to delete more than one message.");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
        message.channel.send(
          `Cleared ${args[0]} messages, Requested by ${message.author}`
        );
      });
  },
};
