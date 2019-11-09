const Discord = require("discord.js");
module.exports = (con, client, guild) => {
  var sql = `DELETE FROM server WHERE id_server = ?`;
  con.query(sql, [guild.id], function(err, result) {
    if (err) throw err;
    console.log("Succesfuly guild removed");
  });

  const delguildemebed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setTitle(
      "🛡️ A server is not protected anymore by 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 | 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 Protect currently " +
        client.guilds.size +
        " servers"
    )
    .addField("🔮**__Discord Name__**", guild.name, true)
    .addField("⛏️**__Dicord id__**", guild.id, true)
    .addField("🚨**__Owner of Serveur__**", guild.owner, true)
    .addField("👏**__Number of Member__**", guild.members.size, true)
    .addField("🎗️**__Number of Roles__**", guild.roles.size, true)
    .addField("📕**__Number of Channels__**", guild.channels.size, true)
    .addField("🌍**__Region of Server__**", guild.region, true)
    .setFooter("Server supprimé le :")
    .setTimestamp()
    .setThumbnail(guild.iconURL);
  client.channels.get("641921982169874434").send(delguildemebed);
};