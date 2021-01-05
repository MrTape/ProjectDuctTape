const Discord = require("discord.js");
const system = require('../../system.js');

module.exports = {
    name: 'bot',
    aliases: [`18`],
    description: `Information about 18.`,
    execute(client, message) {

        let embed = new Discord.MessageEmbed()
            .setColor("#7075e4")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp(new Date)
            .setDescription(`If you need my assistance type **${system.config.Prefix}help**!`)
            .setTitle(`Android 18`)
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setFooter(`Running on v${system.config.LatestVersion}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .addField("Current Version", `v${system.config.LatestVersion}`)
            .addField("Last Dated", system.config.LatestUpdate, true)
            .addField("Current Changelog", `${system.config.ChangelogLink}${system.config.LatestVersion}`, true)
        
            message.channel.send(embed);
    }
}