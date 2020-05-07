const money = require("../../Storage/userData");
const moment = require("moment");
module.exports.run = (bot, msg, args) => {
    let user = msg.author;
    let date = moment(new Date());
    if (!money[msg.author.username]) {
        msg.channel.send("Use *stats before you can get money")
    }
    else {
        if (money[msg.author.username].daily !== date.format('L')) {
            money[msg.author.username].daily = date.format('L');
            money[msg.author.username].money += (Math.floor(Math.random() * 1000));
            msg.channel.send(`${bot.users.cache.get(user.id).username} now has ${money[msg.author.username].money} <:coin:707413399520149566> coins.`);
        }
        else {
            msg.channel.send("You already collected daily...");
            msg.channel.send("The next time you can collect it is at " + date.endOf("day").fromNow())
        }
    }
};

// Help Object
module.exports.props = {
    name: "daily",
    category: "money",
    description: "give money to players daily",
    aliases: ["d"]
};