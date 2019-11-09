const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp");
const mysql = require("mysql");
global.funcdiscord = require("./func.discord.js");
global.funcdiscord.SetupClient(client);
const AntiRaid = require("./anti-raid.js");
const AntiHack = require("./anti-hack.js");
const AntiSpam = require("./anti-spam.js");
const Commands = require("./commands.js");
const ServerBlacklist = require("./server-blacklist.js");
const AddPanel = require("./add-panel.js");
const RemovePanel = require("./remove-panel.js");
const VerifyMember = require("./verify-member.js");
global.ServerParam = require("./server-param.js");
var con = mysql.createConnection({
  host: "host",
  user: "user",
  password: "password",
  database: "db"
});

global.ServerParam.setConn(con);

var nblogs = 0;
var config = require("./config.json");
var prefix = ".";
const cooldown = new Set();

client.on("ready", () => {
  console.log("\n");
  console.log(
    "           ████████████████████████████████████████████████████████████████████████████████████████████████"
  );
  console.log(
    "              ██                                                                                        ██"
  );
  console.log(
    "              ██       ██████╗       ██████╗ ██████╗  ██████╗ ████████╗███████╗ ██████╗████████╗        ██ "
  );
  console.log(
    "              ██       ██╔════╝       ██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝       ██ "
  );
  console.log(
    "              ██       ██║  ███╗█████╗██████╔╝██████╔╝██║   ██║   ██║   █████╗  ██║        ██║          ██ "
  );
  console.log(
    "              ██       ██║   ██║╚════╝██╔═══╝ ██╔══██╗██║   ██║   ██║   ██╔══╝  ██║        ██║          ██ "
  );
  console.log(
    "              ██       ╚██████╔╝      ██║     ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╗   ██║          ██ "
  );
  console.log(
    "              ██       ╚═════╝       ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝   ╚═╝           ██ "
  );
  console.log(
    "              ██                                                                                        ██"
  );
  console.log(
    "           ████████████████████████████████████████████████████████████████████████████████████████████████"
  );
  console.log("\n");

  console.log(` > Bot connected to => ${client.user.tag}!`);
  let streamed = prefix + "help";
  let rotate = 0;
  setInterval(function() {
    if (rotate === 0) {
      client.user.setActivity(
        ` ${streamed} |` + ` ${client.guilds.size} servers ☢️`,
        { type: "WATCHING" }
      );
      rotate = 1;
    } else if (rotate === 1) {
      client.user.setActivity(
        ` ${streamed} |` + ` ${client.users.size} users 🌌`,
        { type: "WATCHING" }
      );
      rotate = 2;
    } else if (rotate === 2) {
      client.user.setActivity(
        ` ${streamed} |` + ` ${client.channels.size} channels 🌀`,
        { type: "WATCHING" }
      );
      rotate = 0;
    }
  }, 10 * 1500);
});
client.on("message", msg => {
  if (msg.channel.name === undefined)return;
  if (msg.channel.type === "dm")return;
  if (msg.author.id === "639933222225969152") return;
  console.log(
    "--------------------------\n logs n°" +
      nblogs +
      " on : " +msg.channel.name+
      "] " +
      "Id user : " +
      msg.author.id +
      " name : " +
      msg.author.tag +
      " => " +
      msg.content +
      "\n--------------------------"
  );
  nblogs++;
});
client.on("message", msg => {
  if (client.user.id == msg.author.id) return;
  if (msg.author.id === "639933222225969152") return;
  AntiSpam(client, msg);
  if (cooldown.has(msg.author.id)) {
    return;
  }
  cooldown.add(msg.author.id);
  setTimeout(function() {
    cooldown.delete(msg.author.id);
  }, 3000);
  if (msg.guild == undefined) return;
  if (msg.channel.type === "dm") return;
  Commands(con, client, msg);

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
});
client.on("guildDelete", guild => {
  RemovePanel(con, client, guild);
});
client.on("guildCreate", guild => {
  ServerBlacklist(con, client, guild);
  AddPanel(con, client, guild);
});
//client.on( "message", msg =>{
client.on("guildMemberAdd" , member => {
  VerifyMember(con, client, member);
  AntiRaid(client, member);
    var sql = `UPDATE server SET role_server = '${member.guild.roles.size}', member_server = '${member.guild.members.size}', channel_server = '${member.guild.channels.size}', region_server = '${member.guild.region}' WHERE id_server = ${member.guild.id}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("guild updated");
  });
});
//    });
client.on("channelCreate", guild => {
  // AntiHack(channel, guild);
});
client.login(config.token);