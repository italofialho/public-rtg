const Discord = require('discord.js');

const func_map = require('../functions/map.js');
const func_team = require('../functions/team.js');

const { ow } = require('./../games_config.json');

module.exports = {
	name: 'ow',
  description: 'MessageEmbed Generate Random Map and Teams.',
	execute(message, args) {
    
    // get Random Map
    var map = func_map.randomMap(ow, args);

    // get Users and shuffle
    teams = func_team.team(message.member.voice.channel.members);

    const generatedTeam = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Game Generated')
      .addField('Mode', map.mode, false)
      .addField('Map', map.name, false)
      //.setThumbnail('attachment://img/mw2_maps/' + map.name + '-t.jpg')
      .addFields(func_team.team(2, message.member.voice.channel.members))
    
    message.channel.send(generatedTeam);

	},
};