const Config = require("./configInfo");
const token = Config.token;
const Discord = require("discord.js");
const { sep } = require("path");
const bot = new Discord.Client();
const fs = require("fs");
const Prefix = "*";

["commands", "aliases"].forEach(x => bot[x] = new Discord.Collection());

//Credits to Anish-Shobith URL: https://gist.github.com/Anish-Shobith/f818c6ef4e0bfa32c6527b219558e78a
const load = (dir = "./commands/") => {

    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
        for (const file of commands) {
            const pull = require(`${dir}/${dirs}/${file}`);
            if (pull.props && typeof (pull.props.name) === "string" && typeof (pull.props.category) === "string") {
                bot.commands.set(pull.props.name, pull);
            }
            if (pull.props.aliases && typeof (pull.props.aliases) === "object") {
                pull.props.aliases.forEach(alias => {
                    bot.aliases.set(alias, pull.props.name);
                });
            }
        }

    });
};

load();

bot.on("ready", () => {
    console.log("Bot is ready");
});

bot.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if (!channel) console.log("not found");
    else {
        channel.send("Ew a new person");
        const command = bot.commands.get("serverEnter");
        console.log(bot.commands.get("serverEnter"));
        command.run(bot, member, channel)
    }
});

//Credits to Anish-Shobith URL: https://gist.github.com/Anish-Shobith/f818c6ef4e0bfa32c6527b219558e78a
bot.on ("message",  async msg=> {
    const args = msg.content.slice(Prefix.length).trim().split(/ +/g);
    const cmd = args.shift();
    const channel = msg.guild.channels.cache.find(channel => channel.name === "bot-commands");
    if (channel) {
        if (msg.channel !== channel && msg.content.startsWith(Prefix)) {
            await msg.delete();
        }
        msg.channel = channel;
        let command;
        if (msg.author.bot || !msg.guild || !msg.content.startsWith(Prefix)) return;
        if (!msg.member) msg.member = await msg.guild.fetchMember(msg.author);
        if (cmd.length === 0) await msg.channel.send("Type something...");
        // if command is found
        if (bot.commands.has(cmd)) {
            command = bot.commands.get(cmd);
            console.log("found")
        }
        // if alias is found
        else if (bot.aliases.has(cmd)) {
            command = bot.commands.get(bot.aliases.get(cmd));
            console.log("alias found")
        }
        else {
            console.log("not found");
            console.log(cmd);
        }
        // run command
        if (command) command.run(bot, msg, args);
    }
    else if(!channel) {
        console.log("Not happening.");
    }
   });
bot.login(token);