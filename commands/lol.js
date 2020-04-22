const Discord = require('discord.js');

const func_map = require('../functions/map.js');
const func_team = require('../functions/team.js');

const { lol } = require('./../games_config.json');

module.exports = {
	name: 'lol',
  description: 'MessageEmbed Generate Random Map and Teams.',
	execute(message, args) {
    if (message.member.voice.channel != null) {
      // get Random Map
      var map = func_map.randomMap(lol, args);

      // get Users and shuffle
      teams = func_team.team(2, message.member.voice.channel.members);

      const generatedTeam = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Game Generated')
        .addField('Map', map.name, false)
        //.setThumbnail('attachment://img/mw2_maps/' + map.name + '-t.jpg')
        .addFields(func_team.team(2, message.member.voice.channel.members))
      
      message.channel.send(generatedTeam);
    } else {
      message.channel.send("you need to enter a voice channel");
    }
	}
};