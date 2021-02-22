const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ip",
    description: "To know the ip",
    usage: "[ip]",
    aliases: [],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle('NEW LEGACY ROLEPLAY SERVER')
    .addField("SERVER IP","5.9.8.124",true)
    .addField("SERVER PORT", "13812",true)
    .setDescription(`You can join our discord here [Discord Link](https://discord.gg/85Df4YeYWS)`)
    .setURL('https://discord.gg/85Df4YeYWS')
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};