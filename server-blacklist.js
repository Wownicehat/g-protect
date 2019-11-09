const Discord = require("discord.js");
module.exports = (con, client, guild) => {
  con.query(
    `SELECT * FROM owner WHERE id_discord = '${guild.owner.id}'`,
    (err, rows) => {
      if (err) throw err;
      if (rows.length == 1) {
        const addguildemebed = new Discord.RichEmbed()
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setAuthor(client.user.tag, client.user.avatarURL)
          .setTitle(
            "``❌`` " +
              guild.owner.name +
              " tryed to add the bot to his server, but was blacklisted. ``❌``"
          )
          .addField("**__Discord Name__**", guild.name, true)
          .setFooter("Server added the :")
          .setTimestamp()
          .setThumbnail(guild.iconURL);
        client.channels.get("641921982169874434").send(addguildemebed);
        guild.owner.send(
          "G-Protect left your server `" +
            guild.name +
            "` because you are blacklisted !"
        );
        guild.leave();
        return;
      } else {
        if (guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) {
          var logs_channel = guild.channels.find(`name`, "logs_server");
          if(!logs_channel){
          guild.createChannel("logs_server", { type: 'text' })
        }
          var role = guild.roles.find(role => role.name === "unverified");
          if (!role) {
            // Overwite permissions for a message author and reset some

            guild
              .createRole({
                name: "unverified",
                color: "BLUE",
                permissions: []
              })
              .then(rolle => {
                guild.channels.forEach(chann => {
                  chann.overwritePermissions(rolle, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false
                  });
                });
              });
          }
        }
      }
    }
  );
};