module.exports.run = async (bot, msg, args) => {
    let user = msg.author.username;
    const check = await msg.channel.send("BEEP BOOP");
    await msg.channel.send("**" + user + "'s** Latency is " + Math.floor(check.createdAt - msg.createdAt) + " ms and API latency is " + Math.round(bot.ws.ping) + " ms");
};

module.exports.props = {
    name: "ping",
    description: "Checks API and Latency ping via sending msg to discord",
    category: "information",
    aliases: ["pt", "p", "pingting"]
};
