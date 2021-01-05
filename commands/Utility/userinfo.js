const Discord = require("discord.js");
const moment = require("moment");
const system = require('../../system.js');

module.exports = {
    name: 'userinfo',
    usage: `${system.config.Prefix}`+"userinfo [@User]",
    description: "Check your or a server member's stats for Discord.",
    execute(client, message) {

        let member = message.mentions.users.first() || message.author;
        const roleMember = message.guild.member(member);

        let embed = new Discord.MessageEmbed()
            .setAuthor(member.username, member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(message.guild.member(member).displayHexColor)
            .setThumbnail(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp(new Date)
            .addField("Name", member.username, true)
            .addField("Nickname", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true)
            .addField("ID", member.id)
            .addField(`Account Created:`, `${moment.utc(member.createdAt).format('h:mm:ssa, (dddd) MMMM Do, YYYY')}`)
            .addField(`Joined Server:`, `Currently Unavailable due to a **UTC** bug...`)
            // .addField(`Joined Server:`, `${moment.utc(member.joinedAt).format('h:mm:ssa, (dddd) MMMM Do, YYYY')}`)
            .addField(`Roles [${roleMember.roles.cache.size}]:`, roleMember.roles.cache.map(s => s).join(" | "));

        message.channel.send(embed);
    }
}