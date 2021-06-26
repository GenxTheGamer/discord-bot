module.exports = {
  name: "rules",
  description: "rules of server",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#329429")
      .setTitle("Rules")
      .setDescription("This is a embed for server rules.")
      .addFields({
        name: "Rules of Conduct",
        value:
          "1. Hate speech of any kind (including racism, sexism, etc.) will not be tolerated.\n\n2. No Discord Links in any text channel.\n\n3. Please use the appropriate channel for your topic of discussion (Examples: looking for a fireteam in the appropriate LFG channel, posting memes in <#727044799701450803>  or <#795168254162239518> ). These channels have been created for a reason.\n\n4.  Self promotion (Twitch, YouTube, Twitter, Social media, etc.) is not allowed outside of the <#839361220502355978>\n\n5. Do not be edgy or edgy just for the sake of being edgy. Do not argue just for the sake of arguing.",
      });
    message.channel.send(newEmbed);
  },
};
