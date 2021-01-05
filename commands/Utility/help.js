const Discord = require("discord.js");
const system = require('../../system.js');

module.exports = {
    name: 'help',
    aliases: [`commands`],
    usage: `${system.config.Prefix}` + "help [command]",
    description: `Shows a list of commands you can use! To go into detail, use ${system.config.Prefix}help [command].`,
    execute(client, message, args) {

        let color;
        if (message.channel.type === "dm") {
            color = `#7075e4`;
        } else {
            color = message.guild.member(message.author).displayHexColor;
        }

        if (args[0]) {

            var helpEmbed = new Discord.MessageEmbed()
                .setColor(`${color}`)

            let name = args[0].toLowerCase();
            switch (name) {
                case "utility":
                    helpEmbed.setTitle(`Utility`);
                    helpEmbed.addField(`- **avatar**`, `Get an image link of your, a server member's, or multiple server member's profile picture.`, true);
                    helpEmbed.addField(`- **bot**`, `Information about 18.`, true);
                    helpEmbed.addField(`- **help**`, `Shows a list of commands you can use! To go into detail, use ${system.config.Prefix}help [command].`, true);
                    helpEmbed.addField(`- **serverinfo**`, `Check the server stats.`, true);
                    helpEmbed.addField(`- **uptime**`, `Check how long the bot has been online.`, true);
                    helpEmbed.addField(`- **userinfo**`, `Check your or a server member's stats for Discord.`, true);
                    break;
                case "fun":
                    helpEmbed.setTitle(`Fun`);
                    helpEmbed.addField(`- **setcolor**`, `Gives you a special role that would set their display color.`, true);
                    break;
                default:
                    const { commands } = message.client;
                    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
                    if (!command) return;

                    helpEmbed.setTitle(`${command.name[0].toUpperCase() + command.name.substr(1)}`);
                    helpEmbed.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                    helpEmbed.setDescription(`**Aliases:** ${command.aliases || "None"}\n**Usage:** ${command.usage || `${system.config.Prefix}${command.name}`}\n **Description:** ${command.description || "No Description"}`);
            }

            message.channel.send(helpEmbed);
        }

        if (!args[0]) {

            if (message.channel.type !== "dm") {
                let embed = new Discord.MessageEmbed()
                    .setDescription(`${message.author.username} check your dms!`)
                    .setColor(`${color}`)

                message.channel.send(embed);
            }

            let SEmbed = new Discord.MessageEmbed()
                .setTitle(`📚 Help`)
                .setColor(`#7075e4`)
                .setDescription(`18's command types.\nType **${system.config.Prefix}help <Category>** to view those category's commands.`)
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .addField(`**🎮 Fun**`, "Time to play!")
                .addField(`**:gear: Utility**`, "Commands that display information.")
                .setFooter(`Running on v${system.config.LatestVersion}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(SEmbed);
        }
    }
}