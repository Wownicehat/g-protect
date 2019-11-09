const Discord = require("discord.js");
var client;
module.exports = {
  SetupClient: cli => {
    client = cli;
  },
  CheckPermission: (msg, permission) => {
    console.log(permission);
    if (!msg.member.hasPermission(permission)) {
      var permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ You don't have permission : '" + permission + "'");
      msg.channel.send(permembed);
      return false;
    }
    if (!msg.guild.members.get(client.user.id).hasPermission(permission)) {
      var permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ Bot missing permission : '" + permission + "'");
      msg.channel.send(permembed);
      return false;
    }
    return true;
  },
  CheckPermissionBot: (guild, permission) => {
    if(guild.members === undefined)
      return false;
    if (!guild.members.get(client.user.id).hasPermission(permission)) {
      return false;
    }
    return true;
  }
};