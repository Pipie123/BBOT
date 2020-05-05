
module.exports.run = async (bot, msg, args) => {
    let user = msg.author.username;
    let mention = msg.mentions.users.first();
    let mentionUser = null;
    let bruh = (Math.floor(Math.random() * 4));
    console.log(bruh);
    //let id = msg.author.id;
    console.log(msg.author.id);
    switch (bruh) {
        case 0:
            if (mention == null) {
                await msg.channel.send("> **" + user + "** the gay is deemed as gay.");
            }
            else {
                mentionUser = mention.username;
                await msg.channel.send("> **" + mentionUser + "** the gay is deemed as gay");
            }
            break;
        case 1:
            /*/if (id === "364181443301343232") {
                console.log('bruh');
                return (msg.channel.send("> **" + user + "** is deemed as swag.").then(m => m.delete({timeout: 1})).then(msg => msg.channel.send("> **" + user + "** the gay is deemed as gay.")));
            }
            else { /*/
                if (mention == null) {
                    await msg.channel.send("> **" + user + "** is deemed as swag.");
                } else {
                    mentionUser = mention.username;
                    await msg.channel.send("> **" + mentionUser + "** is deemed as swag");
                }
            //}
            break;
        case 2:
            if (mention == null) {
                await msg.channel.send("> **" + user + "** is deemed as homosexual.");
            }
            else {
                mentionUser = mention.username;
                await msg.channel.send("> **" + mentionUser + "** is deemed as homosexual");
            }
            break;
        case 3:
            /*/if (id === "364181443301343232") {
                console.log('bruh');
                return (msg.channel.send("> **" + user + "** is deemed as lit.").then(m => m.delete({timeout: 1})).then(msg => msg.channel.send("> **" + user + "** is deemed as homosexual.")));
            }
            else { /*/
                if (mention == null) {
                   await msg.channel.send("> **" + user + "** is deemed as lit.");
                } else {
                    mentionUser = mention.username;
                    await msg.channel.send("> **" + mentionUser + "** is deemed as lit.");
                }
           // }
            break;
        case 4:
            await msg.channel.send("> **" + user + "** are fking hacking");
            break;
        default:
            await msg.channel.send("Not working properly REEEEEEEEEEEEEEEEEE");
            break;
    }

};

module.exports.props = {
    name: "fate",
    category: "troll",
    description: "Tells your fate",
    usage: "blank or !fate @username",
    aliases: ["f"]
};