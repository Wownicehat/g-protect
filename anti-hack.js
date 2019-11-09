const Discord = require("discord.js");

module.exports = (guild, channel) => {
  const hackword = ["seized", "sized", "hack", "hacked"];
  hackword.forEach(function(element) {
    if (channel.name.match(element)) {
      const embedantihack = new Discord.RichEmbed();

      if (channel.deletable) channel.delete();
      console.log("Owner guilde   " + channel.guild.owner.id);
      channel.reply("allServers");
    }
  });
};