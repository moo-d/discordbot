const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const client = new Discord.Client();
const now = require("performance-now");
const config = require("../config.json");
module.exports = client => {
  const activities_list = [
    "with developers",
    "in his room"
  ];
  var prefix = config.prefix;
  console.log(`${client.user.username} is ready`);
  client.user.setStatus("online");
  console.log(
    `                                                                                                                                                                     `
  );
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10900);
  console.log(
    `${client.user.username}: Online at ` +
    client.channels.size +
    ` channels, ` +
    client.guilds.size +
    ` servers ` +
    client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
    ` pengguna dilayani!`
  );
};
