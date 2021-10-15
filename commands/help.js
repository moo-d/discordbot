const Discord = require('discord.js');
const config = require('../config.json');
var creator = config.creator
var clientid = config.clientid
exports.run = async (client, message, args) => {
  const u = message.content.split(" ").slice(1).join(" ");
  if (!u){
    var embeed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setAuthor(`${client.user.username} Commands List`, message.guild.iconURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription(`**Category Help :** \`.help <category>\` \n `)
    .addField(`:flag_jp: For Weebs`, ` \`anime\` `)
    .setFooter(`Bot From ${creator}`, client.user.avatarURL)
    message.channel.send(embeed);
  }
  if (args[0] == "weebs"){
    var embedwebs = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`WEEBS Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
    .addField('Anime | `.anime`', `Mencari Detail Anime `)
    .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
    message.channel.send(embedwebs);
  }
}

exports.conf = {
  aliases: ['help', 'Help', 'h','H'], 
  cooldown: ''
}

exports.help = {
  name: 'help',
  description: 'show all command',
  usage: 'help'
};
