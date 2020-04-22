const Discord = require('discord.js');

const func_map = require('../functions/map.js');
const func_team = require('../functions/team.js');

const { vr } = require('./../games_config.json');

module.exports = {
	name: 'vr',
  description: 'MessageEmbed Generate Random Map and Teams.',
	execute(message, args) {
    if (message.member.voice.channel != null) {
      // get Random Map
      var map = func_map.randomMap(vr, args);

      const generatedTeam = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Game Generated')
        .addField('Map', map.name, false)
        //.setThumbnail('attachment://img/mw2_maps/' + map.name + '-t.jpg')
        .addFields(func_team.team(2, message.member.voice.channel.members, map))
      
      message.channel.send(generatedTeam);
    } else {
      message.channel.send("you need to enter a voice channel");
    }
	}
};