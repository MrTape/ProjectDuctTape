const Discord = require("discord.js");

function imperfectRun(client, message, e, scriptName) {

	console.error('\x1b[31m', `${scriptName} has ran into an error:`, e);
	// client.users.cache.get("239415387198849034").send(`Looks like I ran into an error while performing the command, **${scriptName}**` + " ```js\n" + e.stack + "\n```");
	// message.channel.send(`:x:  |  An error occurred! Please try again later.`);
}

const config = require('./config.json');

module.exports = { imperfectRun, config}