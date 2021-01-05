const system = require('../system.js');
const mongoose = require("mongoose");

module.exports = (client, message) => {

    if (message.author.bot) return;

    mongoose.connect(client.config.Database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    if (message.content.indexOf(client.config.Prefix) !== 0) return;

    const args = message.content.slice(client.config.Prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    if (command.name !== "help" && message.channel.type === "dm") return;

    try {
        command.execute(client, message, args);
    } catch (e) {
        return system.imperfectRun(client, message, e, `${command.name}.js`);
    }
}