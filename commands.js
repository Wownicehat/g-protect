const Discord = require("discord.js");
const prefix = ".";
module.exports = (con, client, msg) => {
  if (msg.content.startsWith(prefix + "help")) {
    if (msg.deletable) msg.delete();
    const suggg = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setTitle("📖__**Guide from the Bot **__📖")
      .addField("**[@User Mention]**", "<@!116913806997585921>", true)
      .addField("**(reason)**", "why ?", true)
      .addField("**{id}**", "116913806997585921", true)
      .addField("⚖️====[**Moderation**]====⚖️", "`Moderation tools`", false)
      .addField(
        "👞 **.kick [@User Mention] (reason)**",
        "`Kick the user from your serveur`",
        false
      )
      .addField(
        "🔨 **.ban [@User Mention] (reason)**",
        "`Ban the user from your serveur`",
        false
      )
      .addField(
        "🎻 **.softban [@User Mention] (reason)**",
        "`Ban, but not too much`",
        false
      )
      .addField(
        "🧸 **.unsoftban [@User Mention] (reason)**",
        "`Unban a softban`",
        false
      )
      .addField("🔎====[**Blacklist**]====🔍", "`Blacklist tools`", false)
      .addField(
        "💉 **.check**",
        "`Check all players from your server [Check in blacklist and ban]`",
        false
      )
      .addField(
        "👻 **.bc**",
        "`heck all players from your server [Check in blacklist No-ban]`",
        false
      )
      .addField(
        "💊 **.verify {id}**",
        "`Check if the ClientID is in the blacklist`",
        false
      )
      .addField("🛠====[**Tools**]====🛠", "`Tools for the admins`", false)
      .addField("♻️ **.purge [Number 1-100]**", "`Clear Message`", false)
      .addField(
        "🔬 **.info [@User Mention]**",
        "`Get information from this personne ...`",
        false
      )
      .addField("🐉 **.admins**", "`List admins`", false)
      .addField(
        "📩 **.idea (your idea)**",
        "`Propose Amelioration for 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩`",
        false
      )
      .addField("👁🗨 **.stats**", "`Stats your server`", false)
      .setThumbnail("http://i.imgur.com/o18YX4T.png")
      .setTimestamp()
      .setFooter("𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 | By Galaxy Staff");
    msg.channel.send(suggg);
  }
  if (msg.content.startsWith(prefix + "stats")) {
    if (msg.deletable) msg.delete();
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      const permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ You don't have permission : 'ADMINISTRATOR'");
      msg.channel.send(permembed);
    } else {
      let sicon = msg.guild.iconURL;
      let ssembed = new Discord.RichEmbed()
        .setDescription("🌌 __Server Stats__ 🌌")
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .addField("🔱 Server Name :", `${msg.guild.name}`)
        .addField("🔱 Number of Member:", msg.guild.members.size)
        .addField("🔱 Number of channel", msg.guild.channels.size)
        .addField("🔱 Number of role", msg.guild.roles.size)
        .setFooter("G-Protect Bot By Galaxy-team🌌")
        .setThumbnail(msg.guild.avatarURL)
        .setTimestamp();
      return msg.channel.send(ssembed);
    }
  }


  if (msg.content.startsWith(prefix + "capcha")) {
    if (msg.deletable) msg.delete();
    const args = msg.content.split(" ").slice(1);
    global.ServerParam.set(msg.guild.id, "capcha", args)
    msg.reply("Parametre `capcha` mit a jour");
  }


  if (msg.content.startsWith(prefix + "idea")) {
    if (msg.deletable) msg.delete();
    const args = msg.content.split(" ").slice(1);
    var sugg = args.slice(0).join(" ");
    const suggg = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setTitle("Suggestion created by " + msg.author.username)
      .setThumbnail(msg.author.avatarURL)
      .setTimestamp()
      .setFooter("𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 [Clic on React]")
      .setDescription(sugg);
    msg.delete(1);
    client.channels
      .get("642284917442478100")
      .send(suggg)
      .then(function(msg) {
        msg.react("✅");
        msg.react("❌");
      })
      .catch(function() {});
  }
  if (msg.content.startsWith(prefix + "leave")) {
    if (msg.deletable) msg.delete();
    if (
      msg.author.id !== "316913806997585921" &&
      msg.author.id !== "638840362663804959" &&
      msg.author.id !== "639205125436735499"
    ) {
      console.log(
        msg.author.tag +
          " a tenter une commande de destruction " +
          msg.author.id +
          "\n"
      );
    } else {
      var args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      var g = client.guilds.find(gg => gg.id === args);
      if (g) {
        const private_embed = new Discord.RichEmbed()
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setAuthor(client.user.tag, client.user.avatarURL)
          .setTitle(
            `🚨 G-Proect was kicked from your server **${g.name}** by **${msg.author.tag}** because you breach discord's TOS`
          )
          .setFooter("Serveur left on ")
          .setTimestamp()
          .setThumbnail(g.iconURL);
        var pv = g.owner;
        pv.send(private_embed);
        g.leave();
      }
    }
  }
  if (msg.content.startsWith(prefix + "allserver")) {
    if (msg.deletable) msg.delete();
    if (
      msg.author.id !== "316913806997585921" &&
      msg.author.id !== "638840362663804959"
    ) {
      console.log(
        msg.author.tag +
          " Voulais voir les serveur mais na pas pu trisesse (.__.)\n"
      );
    } else {
      var allServers = "";
      client.guilds.map(g => {
        allServers +=
          "[" +
          g.members.size +
          "] " +
          g.name +
          " (" +
          g.id +
          ") : " +
          g.owner +
          "\n";
      });
      msg.author.send(allServers);
    }
  }
  // if(msg.content.startsWith(prefix + 'allserv')){
  // if (msg.deletable) msg.delete();
  //       const args = msg.content.split(' ').slice(1);
  //   var sugg = args.slice(0).join(' ');
  // var allServers = "";
  // client.guilds.map((g)=>{
  //   allServers += "[" + g.members.size + "] " + g.name + " (" + g.id + ") : "+g.owner+"\n";
  // });
  //   const sendembed = new Discord.RichEmbed()
  //   .setColor(Math.floor(Math.random() * 16777214) + 1)
  //   .setTitle("📄 All Servers ")
  //   .addField("Serveurs",allServers)
  //   msg.channel.send(sendembed);
  // }
  if (msg.content.startsWith(prefix + "duck")) {
    if (msg.deletable) msg.delete();
    if (
      msg.author.id !== "316913806997585921" &&
      msg.author.id !== "638840362663804959"
    ) {
      console.log(
        msg.author.tag +
          " Voulais add le server sur le panel mais na pas pu sah quel trisesse (.__.)\n"
      );
    } else {
      con.query(
        `SELECT * FROM server WHERE id_server = "${msg.guild.id}"`,
        (err, rows) => {
          if (err) throw err;
          if (rows.length >= 1)
            msg.author.send(msg.guild.name + " : Discord Deja Add");
          else {
            var sql = `INSERT INTO server (id_server, name_server, owner_server, role_server, member_server, channel_server, region_server, icon_server, isban) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            con.query(
              sql,
              [
                msg.guild.id,
                Buffer.from(msg.guild.name).toString("base64"),
                msg.guild.owner.id,
                msg.guild.roles.size,
                msg.guild.members.size,
                msg.guild.channels.size,
                msg.guild.region,
                "",
                ""
              ],
              function(err, result) {
                if (err) throw err;
                console.log("Succesfuly guild added");
              }
            ); // je suis TheHunter et je suis pd ah ok canard
          }
        }
      );
    }
  }

  // if(msg.content.startsWith(prefix + 'insert')){
  //   if(msg.deletable) msg.delete();
  //   if(msg.author.id !== "316913806997585921" && msg.author.id !== "638840362663804959" && msg.author.id !== "594913205638135814"){
  //     console.log(msg.author.tag+" a essayer d'inserer quelqun dans la blacklist mais a echoué sah quel tristess");
  //     return;
  //   }
  //   let blk = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  //   let args = msg.content.split(" ").slice(1);
  //   args[0]args[1]args[2]
  // }

  if (msg.content.startsWith(prefix + "getinvite")) {
    if (msg.deletable) msg.delete();
    if (msg.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) {
      var args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      var g = client.guilds.find(gg => gg.id === args);
      if (g) {
        g.channels
          .find(c => {
            return c.type == "text";
          })
          .createInvite()
          .then(invite => {
            const sendembed = new Discord.RichEmbed()
              .setColor(Math.floor(Math.random() * 16777214) + 1)
              .addField("Invite : ", "discord.gg/" + invite.code)
              .setImage(g.iconURL)
              .setTitle(g.name);
            msg.channel.send(sendembed).catch();
          });
      }
    }
  }
  
  if(msg.content == prefix + "credit"){
      if(msg.deletable) msg.delete();
      const creditembed = new Discord.RichEmbed()
        .setAuthor(client.user.tag, client.user.avatarURL)
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("Special Credit For My Developpeur")
        .addField("THEHUNT3R","Anatik",true)
        .addField("Ducked", "RayanFR",true)
        .addField("Matiofe", "___")
        .setTimestamp()
        .setFooter("Credit on : ");
      msg.channel.send(creditembed).catch();
  }
  
  if (msg.content.startsWith(prefix + "ban")) {
    if (msg.deletable) msg.delete();
    if (funcdiscord.CheckPermission(msg, "BAN_MEMBERS")) {
      let args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      let bUser = msg.guild.member(
        msg.mentions.users.first() || msg.guild.members.get(args[0])
      );
      if (!bUser) {
        return;
      }
      const sendembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("You have been banned from " + bUser.guild.name)
        .setTimestamp()
        .addField("Banned by ", msg.author.tag)
        .setFooter("Banned by ")
        .addField("Reason", args);
      bUser.send(sendembed).catch();
      bUser.ban(args);
    }
  }

  if (msg.content.startsWith(prefix + "softban")) {
    if (msg.deletable) msg.delete();
    if (funcdiscord.CheckPermission(msg, "BAN_MEMBERS")) {
      let args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      let bUser = msg.guild.member(
        msg.mentions.users.first() || msg.guild.members.get(args[0])
      );
      if (!bUser) {
        return;
      }
      const sendembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("📄You have been soft-banned from " + bUser.guild.name)
        .setTimestamp()
        .addField("SoftBanned by ", msg.author.tag)
        .setFooter("SoftBanned on ")
        .addField("Reason", args);
      bUser.send(sendembed).catch();
      var role = msg.guild.roles.find(role => role.name === "unverified");
      if (!role) {
        bUser.member.guild
          .createRole({
            name: "unverified",
            color: "BLUE",
            permissions: []
          })
          .then(nRole => {
            bUser.addRole(nRole);
          });
      } else {
        bUser.addRole(role);
      }
    }
  }

  if (msg.content.startsWith(prefix + "unsoftban")) {
    if (msg.deletable) msg.delete();
    if (funcdiscord.CheckPermission(msg, "MANAGE_ROLES")) {
      let bUser = msg.guild.member(msg.mentions.users.first());
      if (!bUser) {
        return;
      }
      const sendembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("📄You have been un-soft-banned " + bUser.guild.name)
        .setTimestamp()
        .addField("UnSoft-Banned by ", msg.author.tag)
        .setFooter("UnSoft-Banned on ");
      bUser.send(sendembed).catch();
      var role = msg.guild.roles.find(role => role.name === "unverified");
      if (!role) {
        bUser.member.guild
          .createRole({
            name: "unverified",
            color: "BLUE",
            permissions: []
          })
          .then(nRole => {
            bUser.removeRole(nRole);
          });
      } else {
        bUser.removeRole(role);
      }
    }
  }

  if (msg.content.startsWith(prefix + "kick")) {
    if (msg.deletable) msg.delete();
    if (funcdiscord.CheckPermission(msg, "KICK_MEMBERS")) {
      let args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      let bUser = msg.guild.member(
        msg.mentions.users.first() || msg.guild.members.get(args[0])
      );
      if (!bUser) {
        return;
      }
      const sendembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ You have been kicked " + bUser.guild.name)
        .setTimestamp()
        .addField("kicked by : ", msg.author.tag)
        .setFooter("Kicked the : ")
        .addField("Reason", args);
      bUser.send(sendembed).catch();
      bUser.kick();
    }
  }
  if (msg.content.startsWith(prefix + "purge")) {
    if (msg.deletable) msg.delete();
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
      const permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ You don't have permission : 'MANAGE_MESSAGES'");
      msg.channel.send(permembed);
    } else if (
      !msg.guild.members.get(client.user.id).hasPermission("MANAGE_MESSAGES")
    ) {
      const permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ Bot don't have permission : 'MANAGE_MESSAGES'");
      msg.channel.send(permembed).catch();
    } else {
      let args = msg.content
        .split(" ")
        .slice(1)
        .join(" ");
      if (args >= 100) {
        return msg.reply("Please put a number less than `100`");
      }
      msg.channel.bulkDelete(args).then(s => {
        msg
          .reply("You have cleared **" + s.size + "** message(s) 🗑")
          .then(s => {
            setTimeout(() => {
              s.delete();
            }, 5000);
          });
      });
      // if (isNaN(parseInt(args))) return;
// args = parseInt(args);
// var runs = Math.floor(args / 100);
// 
// var rest = args % 100;
// console.log(runs + " runs and + " + rest);
// var total = 0;
// (async function() {
//   while(runs != 0)
//   {
//     var messages = await msg.channel.fetchMessages(100, true);
//     total += messages.size;
//     msg.channel.bulkDelete(messages);
//     runs--;
//   }
//   var messages = await msg.channel.fetchMessages(rest, true);
//   total += messages.size;
//     msg.channel.bulkDelete(messages);
//   msg
//     .reply("You have cleared **" + total + "** message(s) 🗑")
//     .then(s => {
//       setTimeout(() => {
//         s.delete();
//       }, 5000);
//     });
// })();
    }
  }

  if (msg.content.startsWith(prefix + "check")) {
    if (msg.deletable) msg.delete();
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      const permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ You don't have permission : 'ADMINISTRATOR'");
      msg.channel.send(permembed);
    } else if (
      !msg.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")
    ) {
      const permembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("❌ Bot don't have permission : 'ADMINISTRATOR'");
      msg.channel.send(permembed);
    } else {
      msg.guild.members.map(s => {
        con.query(
          `SELECT * FROM blacklist WHERE id_discord = "${s.id}"`,
          (err, rows) => {
            if (err) throw err;
            if (rows.length == 1) {
              var raison = rows[0].raison;
              var pseudo = rows[0].pseudo;
              const sendembed = new Discord.RichEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setTitle(
                  "❌ You have been banned from serveur : " + s.guild.name
                )
                .setTimestamp()
                .setURL("http://g-protect.alwaysdata.net/unban")
                .addField(
                  "You have been banned because you are in the blacklist ",
                  "_____"
                )
                .setFooter("Banned on : ")
                .addField("Reason", raison);
              s.send(sendembed);
              const sendembed_s = new Discord.RichEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setTitle("Banned from " + s.guild.name)
                .setTimestamp()
                .setURL("http://g-protect.alwaysdata.net/unban")
                .addField(pseudo, "Banned because is in the blacklist")
                .setFooter("Banned on : ")
                .addField("Reason", raison);
              /*msg.channel.send(sendembed_s).catch();*/
              let logs_channel = msg.guild.channels.find(`name`, "logs_server")
              if(!logs_channel) return msg.guild.createChannel("logs_server", { type: 'text' });
              logs_channel.send(sendembed_s);
              client.channels.get("641921982169874434").send(sendembed_s);
              s.ban(raison);
            }
          }
        );
      });
    }
  }
  if (msg.content === prefix + "bc") {
    if (msg.deletable) msg.delete();
    var xptdrlolmdr = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setTitle("Checking for blacklisted players. . .")
      .setTimestamp();
    msg.channel.send(xptdrlolmdr).then(pd => {
      setTimeout(() => {
          var lolxptdrmdr = new Discord.RichEmbed()
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setTitle("SOON")
          .setTimestamp();
        pd.edit(lolxptdrmdr);
      }, 2000);
    });
    };

  if (msg.content.startsWith(prefix + "info")) {
    if (msg.deletable) msg.delete();
    const mention = msg.mentions.members.first();
    var micon = mention.user.avatarURL;
    var memberembed = new Discord.RichEmbed()
      .setDescription("🌌__Informations__🌌")
      .setFooter("🌌G-Protect🌌")
      .setTimestamp()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setThumbnail(micon)
      .addField("🔱 Tag !:", mention.user.tag)
      .addField("🔱 ClientID !:", mention.user.id)
      .addField("🔱 Game Activity !:", mention.presence.game)
      .addField("🔱 Username !:", mention.user.username)
      .addField("🔱 Number of roles !:", mention.roles.size - 1)
      .addField("🔱 Joining date !:", mention.joinedAt);
    msg.channel.send(memberembed).catch();
  }

  if (msg.content.startsWith(prefix + "verify")) {
    if (msg.deletable) msg.delete();
    let args = msg.content.split(" ").slice(1);
    let id = args.slice(0).join(" ");
    con.query(
      `SELECT * FROM blacklist WHERE id_discord = ?`, [id],
      (err, rows) => {
        if (err) throw err;
        if (rows.length == 1) {
          var raison = rows[0].raison;
          var pseudo = rows[0].pseudo;
          var author = rows[0].author;
          var id_embed = new Discord.RichEmbed()
            .setDescription("🌌__Informations")
            .setFooter("🌌G-Protect🌌")
            .setTimestamp()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setThumbnail(micon)
            .addField(`User ${pseudo} `, `was blacklisted by : ${author} ❌`)
            .addField("Raison : ", raison);
          msg.channel.send(id_embed).catch();
        } else {
          var id_embed = new Discord.RichEmbed()
            .setDescription("🌌__Informations__🌌")
            .setFooter("🌌G-Protect🌌")
            .setTimestamp()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setThumbnail(micon)
            .addField(`User `, `is not blacklisted ✅ (<@${args}>)`);
          msg.channel.send(id_embed).catch();
        }
      }
    );
  }
  if (msg.content.startsWith(prefix + "admins")) {
    var listAdmins = "";
    msg.guild.members.map(s => {
      if (s.hasPermission("ADMINISTRATOR")) {
        switch (s.presence.status) {
          case "online":
            listAdmins += "🔵 online <@!" + s.id + ">\n";
            break;
          case "dnd":
            listAdmins += "🔴 dnd <@!" + s.id + ">\n";
            break;
          case "idle":
            listAdmins += "⚪ idle <@!" + s.id + ">\n";
            break;
          case "offline":
            listAdmins += "⚫ offline <@!" + s.id + ">\n";
            break;
          default:
        }
      }
    });

    if (msg.deletable) msg.delete();
    const adminembed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setTitle("Admins online")
      .addField("Administrateurs", listAdmins, true)
      .setTimestamp()
      .setFooter("𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩 | By Galaxy Staff");
    msg.channel.send(adminembed).catch();
  }
  if (msg.content === prefix + "invite") {
    if (msg.deletable) msg.delete();
    const invembed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setTitle("Invite 𝙂-𝙋𝙧𝙤𝙩𝙚𝙘𝙩")
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=638913932718768138&scope=bot&permissions=2147483127"
      )
      .setImage(
        "http://i.imgur.com/o18YX4T.png"
      )
      .setTimestamp()
      .setFooter(msg.author.tag, msg.author.avatarURL);
    msg.channel.send(invembed);
  }
};