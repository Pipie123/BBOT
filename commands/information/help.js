module.exports.run = (bot, msg, args) => {
     msg.channel.send("```css\n[So far there is:] " +
        "\n!userInfo: See your stats." +
        "\n!fate: Test your luck to see what you are." +
        "\n!pt: Checks your latency and api latency." +
        "\n!engrish: Must type something after !engrish. Changes all L's to R's ```");

};

// Help Object
module.exports.props = {
    name: "help",
    category: "info",
    aliases: ["commands"],
    description: "Provides guide",
    usage: "",
};