module.exports.run = (bot, msg, args) => {
    let user = msg.author.username;
    let engrish = msg.content.substring(9, msg.content.length);
    let userHerro = user.replace(/l/g, "r");
    let userHerro1 = userHerro.replace(/L/g, "R");
    if (engrish.toLowerCase().includes("l")) {
        console.log("test bruh");
        let herro = engrish.replace(/L/g, "R");
        let herro1 = herro.replace(/l/g, "r");
        msg.channel.send("**" + userHerro1 + "-san** said: " + herro1);
    }
    else {
        msg.channel.send("**" + userHerro1 + "-san** said: " + args);
    }
};

// Help Object
module.exports.props = {
    name: "engrish",
    category: "troll",
    description: "Changes every L's to R's",
};