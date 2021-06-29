module.exports = {
  name: "help",
  description: "View a full list of commands",
  execute(message, client, Discord) {
    const embed = new Discord.MessageEmbed();

    client.commands.forEach((command) => {
      embed
        .setTitle("Commands")
        .addField(`${command.name}`, `${command.description}`, false);
    });
    message.channel.send(embed);
  },
};
