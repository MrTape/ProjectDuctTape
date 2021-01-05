const Discord = require("discord.js");
const system = require('../../system.js');

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    usage: `${system.config.Prefix}`+"avatar [@User(s)]",
    description: "Get an image link of your, a server member's, or multiple server member's profile picture.",
    execute(client, message) {

        let member = message.mentions.users.first() || message.author;
        let avatarEmbed = new Discord.MessageEmbed()
            .setColor(message.guild.member(message.author).displayColor)
            .setTitle(`${member.username}'s Avatar`)
            .setTimestamp(new Date)
            .setImage(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));

        if (!message.mentions.users.size) {

            message.channel.send(avatarEmbed);
        } else if (message.mentions.users.size === 1) {

            message.channel.send(avatarEmbed);
        } else {

            const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
            });

            message.channel.send(avatarList);
        }
    }
}