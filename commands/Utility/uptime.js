module.exports = {
    name: 'uptime',
    description: "Check how long the bot has been online!",
    execute(client, message) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        let uptime = `I've been constantly up for **${days}** days, **${hours}** hours, **${minutes}** minutes and **${seconds.toFixed(0)}** seconds!`;
        message.channel.send(uptime);
    }
}