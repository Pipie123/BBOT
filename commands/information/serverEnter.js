const Discord = require('discord.js');
module.exports.run = (bot, member, channel) => {
    let server = ["Malding", "Gay", "Lit", "Swaggy", "Moist"];
    let serverWord = server[Math.floor(Math.random() * 5)];
    let strength = Math.floor(Math.random() * 11);
    let intelligence = Math.floor(Math.random() * 11);
    let charisma = Math.floor(Math.random() * 11);
    let agility = Math.floor(Math.random() * 11);
    let luck = Math.floor(Math.random() * 11);
    let str;
    let int;
    let chr;
    let agl;
    let lck;
    if (strength > 7) str = "Syrup might consider you an adversary. <:syrup:707112987760263208>";
    else if (strength > 3) str = "Your sensei compliments you after lifting chairs. <:noice:707120919595712523>";
    else str = "You did the pull up test and got a -2. <:uh:707120919528603648>";

    if (intelligence > 7) int = "Kaguya will now stalk you. Well done. <:hehe:707121022729715742>";
    else if(intelligence > 3) int = "You scored a C on the final and your grade dropped to a B. <:sigh:707121023082037358>";
    else int = "You are less incompetent and dumber than Aqua. <:aqua:707114918738133033>";

    if (charisma > 7) chr = "You pick up all the cat girls in your local WholeFoods. <:jojo:707129288771633202>";
    else if (charisma > 3) chr = "You keep telling yourself you have swag. <:umaru:707113040960684092>";
    else chr = "Even a loli wants to die from seeing the cringe. <:endme:707121020041166849>";

    if (agility > 7) agl = "Thicc Pikachu sees you as a threat. <:thicc:707120921315508296>";
    else if (agility > 3) agl = "You are fast enough to avoid doing chores after dinner. <:mom:707114520145035324>";
    else agl = "Even Fujiwara can't fix you. <:hhhhheee:707121022494572574>";

    if (luck > 7) lck = "You might win Rock, Paper, Scissors with Kazuma. <:kazuma:707117918198169670>";
    else if (luck > 3) lck = "You once won 20 dollars from the lottery ticket. <:yui:707121044372193380>";
    else lck = "You are fated to be taken to a forest alone with him. <:wot:707114529150206034>";

    const embed = new Discord.MessageEmbed()
        .setTitle(`Welcome ${member.user.username}, to the ${serverWord} Server`)
        .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
        .addField("So yeah,",`The following are ${member.user.username}'s stats`)
        .addField("Strength: ", `${strength} ${str}`)
        .addField("Intelligence: ", `${intelligence} ${int}`)
        .addField("Charisma: ", `${charisma} ${chr}`)
        .addField("Agility: ", `${agility} ${agl}`)
        .addField("Luck: ", `${luck} ${lck}`)
        .setFooter("We hope you enjoy staying here uwu", "https://imgur.com/uUVzXXB")
        .setThumbnail(member.user.displayAvatarURL());
    channel.send(embed);
};

module.exports.props = {
    name: "serverEnter",
    description: "Tells your user info",
    usage: "blank or !userInfo @name",
    category: "information",
    aliases: "dnd",
};