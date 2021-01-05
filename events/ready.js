const system = require('../system.js');

const activities_list = [
    {
        "type": "WATCHING",
        "message": "Sidney play video games!"
    },
    {
        "type": "LISTENING",
        "message": "One-Winged Angel on repeat!"
    },
    {
        "type": "PLAYING",
        "message": "One Step From Eden"
    },
    {
        "type": "PLAYING",
        "message": "Dragon Ball FigherZ"
    },
    {
        "type": "PLAYING",
        "message": "Portal 2"
    },
    {
        "type": "PLAYING",
        "message": "FINAL FANTASY VII"
    },
    {
        "type": "PLAYING",
        "message": "Outlast"
    },
    {
        "type": "LISTENING",
        "message": "Ashley's rant sessions!"
    },
    {
        "type": "WATCHING",
        "message": "Anime"
    },
    {
        "type": "PLAYING",
        "message": "Alien Isolation"
    },
    {
        "type": "PLAYING",
        "message": `${system.config.LatestVersion}`
    },
]

module.exports = (client) => {

	console.log('\x1b[33m', `[18] Ready to serve in the Duct Tape Discord server on version: ${system.config.LatestVersion}!`, '\x1b[0m');
	setInterval(() => {
		let index = Math.floor(Math.random() * (activities_list.length));
		client.user.setActivity(activities_list[index].message, {type: activities_list[index].type});
	}, 30000);
}