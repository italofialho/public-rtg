const Discord = require('discord.js');

const func_approve = require('../functions/approve.js');
const func_map = require('../functions/map.js');
const func_team = require('../functions/team.js');
const func_voicechannel = require('../functions/createChannel.js');

const { mw2 } = require('./../games_config.json');

module.exports = {
	name: 'mw2',
  description: 'MessageEmbed Generate Random Map and Teams.',
	execute(message, args, cache) {(async () => {
    var ap = await func_approve.game(message, cache);
    if (ap.status) {
      // mw2 has only 2 teams
      numOfTeams = 2;

      // get Random Map
      var map = func_map.randomMap(mw2, args);

      // creates the voice channels
      //func_voicechannel.createChannel(message, cache, numOfTeams, map);

      const generatedTeam = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Game Generated')
        .addField('Map', map.name + '  `' + map.code + '`', false)
        //.setThumbnail('attachment://img/mw2_maps/' + map.name + '-t.jpg')
        .addFields(func_team.team(numOfTeams, message.member.voice.channel.members, map))

      message.channel.send(generatedTeam);
    } else {
      message.channel.send(ap.msg);
    }
	})()},
};