require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();
// const lyricsFinder = require("lyrics-finder");
// const prefix = "wb";
const prefix = "==";
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => console.log(`${client.user.username} has logged in`));

// client.on("message", (message) => {
//   if (message.author.bot) return;
//   console.log(`[${message.author.tag}]: ${message.content} `);
//   if (message.content === "hello") {
//     message.reply("hello there");
//   }
// });

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "rules") {
    client.commands.get("rules").execute(message, args, Discord);
  } else if (command === "invite") {
    client.commands.get("invite").execute(message, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (command === "afk") {
    client.commands.get("afk").execute(message, args);
  } else if (command === "help") {
    client.commands.get("help").execute(message, client, Discord);
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
