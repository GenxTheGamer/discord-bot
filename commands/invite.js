module.exports = {
  name: "invite",
  description: "invite link of our discord server.",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#52006A")
      .setTitle("Invite Code")
      .setDescription("https://discord.gg/SsKgnGw")
      .addFields({
        name: "SMGenz",
        value:
          "Who are we?\n\nWe are 3 content creators together making youtube content for entertainment\nWhat's in the server?\n\n\nWe have :\n LFG Channel (Looking for Group)\n Tech Section <:Right:853125708673843220>\n Weeb Section \n Gaming Section  \n Active Community\n Friendly Environment",
      })
      .setImage("https://i.imgur.com/0fg2nfa.gif");
    message.channel.send(newEmbed);
  },
};
