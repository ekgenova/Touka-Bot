var Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = ">";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! and serving in CF101`);
});

client.on('message', msg => {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startswith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");
  var args2 = message.content.substring()

  switch (args[0].toLowerCase()) {
    case "welcome":
      message.channel.sendMessage("Welcome to Crash Fever 101 Discord. WIP ");
      break;
    case "rules":
      message.channel.sendMessage("Rules: WIP ");
      break;
    case "commands":
      message.channel.sendMessage("List of commands: WIP");
      break;
    //case "unit";
    //  switch (expression) {
    //    case expression:
//
  //        break;
  //      default:

      }



  )};


client.login('NDEwMjEwMTAzNjEwODM0OTQ0.DVp2lw.1uShlJvZW5Cv6Dzwf4pNvDmqQeE');
