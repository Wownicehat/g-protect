const Discord = require("discord.js");
module.exports = (con, client, guild) => {
  var sql = `INSERT INTO server (id_server, name_server, owner_server, role_server, member_server, channel_server, region_server, icon_server, isban) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  con.query(
    sql,
    [
      guild.id,
      Buffer.from(guild.name).toString("base64"),
      guild.owner.id,
      guild.roles.size,
      guild.members.size,
      guild.channels.size,
      guild.region,
      "",
      ""
    ],
    function(err, result) {
      if (err) throw err;
      console.log("Succesfuly guild added");
    }
  );

  const addguildemebed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setTitle(
      "🛡️A new server protected by 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 | 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 is protecting " +
        client.guilds.size +
        " servers"
    )
    .addField("🔮**__Discord Name__**", guild.name, true)
    .addField("⛏️**__Dicord id__**", guild.id, true)
    .addField("🚨**__Owner of Serveur__**", guild.owner, true)
    .addField("👏**__Number of Member__**", guild.members.size, true)
    .addField("🎗️**__Number of Roles__**", guild.roles.size, true)
    .addField("📕**__Number of Channel__**", guild.channels.size, true)
    .addField("🌍**__Region of Server__**", guild.region, true)
    .setFooter("Server added the :")
    .setTimestamp()
    .setThumbnail(guild.iconURL);
  client.channels.get("641921982169874434").send(addguildemebed);
};