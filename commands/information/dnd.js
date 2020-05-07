const Discord = require('discord.js');
const fs = require("fs");
const userData = require("../../Storage/userData");
module.exports.run = (bot, msg, args) => {
    if (!userData[msg.author.username]) {

        let strength = Math.floor(Math.random() * 11);
        let intelligence = Math.floor(Math.random() * 11);
        let charisma = Math.floor(Math.random() * 11);
        let agility = Math.floor(Math.random() * 11);
        let luck = Math.floor(Math.random() * 11);
        userData[msg.author.username] = {
            money: 0,
            daily: 0,
            strength: strength,
            intelligence: intelligence,
            charisma: charisma,
            agility: agility,
            luck: luck,
        };
        fs.writeFile("./Storage/userData.json", JSON.stringify(userData), (err) => {
            if (err) console.log("daily didnt work")
        });
    }
    let str;
    let int;
    let chr;
    let agl;
    let lck;
    let bruh = userData[msg.author.username];
    if (bruh.strength > 7) str = "Syrup might consider you an adversary. <:syrup:707112987760263208>";
    else if (bruh.strength > 3) str = "Your sensei compliments you after lifting chairs. <:noice:707120919595712523>";
    else str = "You did the pull up test and got a -2. <:uh:707120919528603648>";

    if (bruh.intelligence > 7) int = "Kaguya will now stalk you. Well done. <:hehe:707121022729715742>";
    else if (bruh.intelligence > 3) int = "You scored a C on the final and your grade dropped to a B. <:sigh:707121023082037358>";
    else int = "You are less incompetent and dumber than Aqua. <:aqua:707114918738133033>";

    if (bruh.charisma > 7) chr = "You pick up all the cat girls in your local WholeFoods. <:jojo:707129288771633202>";
    else if (bruh.charisma > 3) chr = "You keep telling yourself you have swag. <:umaru:707113040960684092>";
    else chr = "Even a loli wants to die from seeing the cringe. <:endme:707121020041166849>";

    if (bruh.agility > 7) agl = "Thicc Pikachu sees you as a threat. <:thicc:707120921315508296>";
    else if (bruh.agility > 3) agl = "You are fast enough to avoid doing chores after dinner. <:mom:707114520145035324>";
    else agl = "Even Fujiwara can't fix you. <:hhhhheee:707121022494572574>";

    if (bruh.luck > 7) lck = "You might win Rock, Paper, Scissors with Kazuma. <:kazuma:707117918198169670>";
    else if (bruh.luck > 3) lck = "You once won 20 dollars from the lottery ticket. <:yui:707121044372193380>";
    else lck = "You are fated to be taken to a forest alone with him. <:wot:707114529150206034>";
        const embedThree = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username}, here are your stats`)
            .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
            .addField("Strength: ", `${bruh.strength} ${str}`)
            .addField("Intelligence: ", `${bruh.intelligence} ${int}`)
            .addField("Charisma: ", `${bruh.charisma} ${chr}`)
            .addField("Agility: ", `${bruh.agility} ${agl}`)
            .addField("Luck: ", `${bruh.luck} ${lck}`)
            .setThumbnail(msg.author.displayAvatarURL());
        msg.channel.send(embedThree);
};


module.exports.props = {
    name: "dnd",
    description: "Tells your user info",
    usage: "blank or !userInfo @name",
    category: "information",
    aliases: ["stats", "st", "d"]
};