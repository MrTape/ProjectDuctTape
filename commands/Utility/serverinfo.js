const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    description: "Check the server stats.",
    execute(client, message) {

        let vLevel = message.guild.verificationLevel.toLowerCase();
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(message.guild.member(message.author).displayHexColor)
            .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp(new Date)
            .addField("Name", message.guild.name, true)
            .addField("Owner", message.guild.owner, true)
            .addField("ID", message.guild.id)
            .addField("Verification Level", vLevel[0].toUpperCase() + vLevel.substr(1), true)
            .addField("MFA Level", message.guild.mfaLevel, true)
            .addField("Region", message.guild.region.toUpperCase())
            .addField("Channels", message.guild.channels.cache.size, true)
            .addField("Roles", message.guild.roles.cache.size, true)
            .addField("Members", message.guild.memberCount, true)
            .addField(`Server Created:`, `${moment.utc(message.guild.createdAt).format('h:mm:ssa, (dddd) MMMM Do, YYYY')}`)
            .addField(`Joined Server:`, `Currently Unavailable due to a **UTC** bug...`);

        message.channel.send(embed);
    }
}