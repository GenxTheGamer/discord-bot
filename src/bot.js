require("dotenv").config();

const { Client, DiscordAPIError } = require("discord.js");

const client = new Client();
const lyricsFinder = require("lyrics-finder");

const PREFIX = "wb";

client.on("ready", () => console.log(`${client.user.username} has logged in`));

// client.on("message", (message) => {
//   if (message.author.bot) return;
//   console.log(`[${message.author.tag}]: ${message.content} `);
//   if (message.content === "hello") {
//     message.reply("hello there");
//   }
// });

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim() //to trim space between command and substring
      .substring(PREFIX.length) //to get command's substring
      .split(/\s+/); //For removing the space patterns
    if (CMD_NAME === "greet") {
      message.channel.send(`Hi ${message.author}`);
    }
    if (CMD_NAME === "ping") {
      message.channel.send(
        `🏓Latency is ${
          Date.now() - message.createdTimestamp
        }ms. API Latency is ${Math.round(client.ws.ping)}ms`
      );
    }
    if (CMD_NAME === "wot") {
      message.channel.send(`What you know about rolling down in the deep`);
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
