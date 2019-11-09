//----------------------Modul export-----------------------\\
const Discord = require('discord.js');
const Jimp = require('jimp');
const cooldown = new Set();
module.exports = (con, client, member, msg) => {
global.ValideCodes = [];
global.Coincoin = []; // Don't duck me because i'm not bypassable
var prefix = ".";
const HasRole = (a, b) => {
  if (a.roles.find(r => r.name === b)) {
    return true;
  }
  return false;
};
 function gener(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz' ;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }
  if (member.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) {
    var role = member.guild.roles.find(role => role.name === "unverified");
    if (!role) {
      member.guild
        .createRole({
          name: "unverified",
          color: "BLUE",
          permissions: []
        })
        .then(nRole => {
          member.addRole(nRole);
        });
    } else {
      member.addRole(role);
    }
  }
con.query(
  `SELECT * FROM blacklist WHERE id_discord = "${member.user.id}"`,
  (err, rows) => {
    if (err) throw err;
    if (rows.length == 1) {
      let raison = rows[0].raison;
      const banembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setAuthor(client.user.tag, client.user.avatarURL)
        .setTitle(member.user.tag + " Banned Because is blacklisted")
        .addField("On serveur : ", member.guild.name)
        .setFooter("Banned the ")
        .addField("Reason", raison)
        .setTimestamp()
        .setThumbnail(member.user.avatarURL);
        let logs_channel = member.guild.channels.find(`name`, "logs_server")
              if(!logs_channel) return;
        logs_channel.send(sendembed_s);
      client.channels.get("642284915601309707").send(banembed);

      const sendembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("You are Banned On Serveur : " + member.guild.name)
        .addField(
          "Because you are in the blacklist !",
          "To appeal the decision : https://g-protect.alwaysdata.net/unban.php"
        ) // SITE EN DEV ¯\_(ツ)_/¯
        .setTimestamp()
        .setFooter("Banned the : ")
        .addField("Reason", raison);
      member.send(sendembed);
      member.ban(raison);
    } else {
    Jimp.read('captcha.png', (err, captcha) => {
  if (err) throw err;
  ValideCodes[member.id] = gener(6);
  Coincoin[member] = member;
  // var rotttat = Math.floor(Math.random() * 10)
  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
  }

/*  captcha.scan(0, 0, captcha.bitmap.width, captcha.bitmap.height, function(x, y, idx) {
    captcha.setPixelColor(Math.floor(Math.random() * 16777214) + 1, x, y);
  });*/
  captcha.opacity(0.8)

 captcha.resize(250, 100)
    //captcha.rotate(rotttat);
    Jimp.loadFont('font.fnt').then(font => {
  captcha.print(
    font,
    43, // x
    13, // y
    ''+ValideCodes[member.id]+'',
    35, // MaxWidth
    35, // MaxHeight
    (err, image, { x, y }) => {}
  );
/*   captcha.print(
     font,
     40,
     34,
     '--------',
     35,
     (err, image, { x, y }) => {}
   );*/
  captcha.contrast(-0.02);
  captcha.brightness(-0.02);
  captcha.quality(100);
  // captcha.rotate(-rotttat);
  captcha.resize(500, 200)
  captcha.getBuffer(Jimp.MIME_PNG, (err, b) => {    member.send({
  files: [new Discord.Attachment(b ,"captcha.png")] // captcha send to user
      });
    });
  });
});
member.send("`.resolve[captcha code] 👉`");
}
client.on('message', msg => {
  if (cooldown.has(msg.author.id))
		{
			return;
		}
    cooldown.add(msg.author.id);
    setTimeout(function()
		{
			cooldown.delete(msg.author.id)
		}, 3000);
if(msg.content.startsWith(prefix + 'resolve')){
  let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();
  if(args == ValideCodes[msg.author.id]){
    delete ValideCodes[msg.author.id];
    msg.channel.send(`<@!${msg.author.id}>, Tu a été Verifier sur : **${Coincoin[msg.author].guild.name}**`); // send message ok
    var niggggga = Coincoin[msg.author].guild.roles.find(role => role.name === "unverified");
            if(niggggga === undefined)
            console.log("Na pas pu trouver le role unverified sur " + Coincoin[msg.author].guild.name);
          Coincoin[msg.author].removeRole(niggggga, "nicked");
                          const verifembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle(msg.author.tag+" has verified")
        .addField("On serveur : ", `${Coincoin[msg.author].guild.name}`)
        .addField("Compte created on : ", msg.author.createdAt)
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        .setFooter("Verified the : ")
      client.channels.get("642284915601309707").send(verifembed);
          delete Coincoin[msg.author];
  }else{
    msg.channel.send(`<@!${msg.author.id}>, Le Code Est Faux 👎`);
  }
}
});
});
}
//------------ END MODULE CAPTCHA BY THEHUNT3R/DUCKY -------------\\