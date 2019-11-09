const Discord = require("discord.js");
var MessageData = [];
module.exports = (client, msg) => {
  if (msg.channel.name === undefined){
  }else{
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 2000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;

  MessageData[msg.author.id].LastMessage.push(msg);


  if (MessageData[msg.author.id].MesssageNumber >= 3) {
    if (msg.deletable) msg.delete();
      const sendeddd = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("Stop Spamming 😡");
      msg.channel.send(sendeddd).then(stopspam => {
        setTimeout(() => {
          stopspam.delete();
        }, 3000);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
        if (msg.content == msgg.content) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (isFine) {

        const spambed = new Discord.RichEmbed()
          .setColor(Math.floor(Math.random() * 16777214) + 1)
          .setTitle(msg.author.tag + " has been kicked for spamming 😡");
        msg.channel.send(spambed);
        msg.channel.bulkDelete("3");
        msg.member.kick("Spamming is not allowed on this server");
      }
    }
  if (MessageData[msg.author.id] >= 4) {
    if (msg.deletable) msg.delete();
     msg.channel.bulkDelete("4");
      const spambed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
       
        .setTitle(msg.author.tag + " has been kicked for spamming 😡");
      msg.channel.send(spambed);
      msg.member.kick("Spamming is not allowed on this server");
    }
  }
};