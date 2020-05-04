const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    console.log("bruh");
    let bruhMoment = msg.author;
    let embed = new Discord.MessageEmbed()
        .setTitle("User Information")
        .addField("Player name:", bruhMoment.username)
        .addField("Player ID:", bruhMoment.id)
        .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
        .setThumbnail(bruhMoment.avatarURL());
    await msg.channel.send(embed);
};

// Help Object
module.exports.props = {
    name: "userInfo",
    description: "Tells your user info",
    usage: "blank or !userInfo @name",
    category: "information",
    aliases: ["ui", "userinfo", "user"]
};