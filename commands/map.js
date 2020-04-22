const Discord = require('discord.js');
const func_map = require('../functions/map.js');

const games = require('./../games_config.json');

module.exports = {
	name: 'map',
  description: 'MessageEmbed Generate Random Map and Teams.',
	execute(message, args) {
    const generatedTeam = new Discord.MessageEmbed().setColor('#0099ff').setTitle('Map').addFields(EmbedMaps(args));
    message.channel.send(generatedTeam);
	},
};

function EmbedMaps(args) {
  ct_args = [];
  for (let i = 1; i < args.length; i++) {
    ct_args.push(args[i]);
  }

  switch (args[0]) {
    case "mw2":
      return mw2_format(games.mw2, ct_args);
      break;
    
    case "lol":
      return lol_format(games.lol, ct_args);
      break;
    
    case "ow":
      return ow_format(games.ow, ct_args);
      break;

    default:
      return { "name": "!map ?", "value": "`mw2` \n `lol`", "inline": false }
      break;
  }
}

function mw2_format(game, ct_args) {
  embed = [];

  func_map.arr_maps(game, ct_args).forEach(arg => {
    map = [];

    arg.map.forEach(el => {
      map.push(el.name + '  `' + el.code + '`');
    });

    embed.push({ "name": '**' + arg.category + '**', "value": map, "inline": false });
  });

  return embed;
}

function lol_format(game, ct_args) {
  embed = [];

  func_map.arr_maps(game, ct_args).forEach(arg => {
    map = [];

    arg.map.forEach(el => {
      map.push(el.name + '  `' + el.code + '`');
    });

    embed.push({ "name": '**' + arg.category + '**', "value": map, "inline": false });
  });

  return embed;
}

function ow_format(game, ct_args) {
  embed = [];

  func_map.arr_maps(game, ct_args).forEach(arg => {
    map = [];

    arg.map.forEach(el => {
      map.push(el.name);
    });

    embed.push({ "name": '**' + arg.category + '**', "value": map, "inline": false });
  });

  return embed;
}