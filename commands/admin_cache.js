const Discord = require('discord.js');

module.exports = {
	name: 'cache',
  description: 'MessageEmbed Generate Random Teams.',
  execute(message, args, cache) {

    c(cache, args);

	},
};

async function c(cache, arg) {
  
  if (arg[0] == 'set') {
    console.log(await cache.set('test-name', 'test-data'));
  } else if (arg[0] == 'get') {
    console.log(await cache.get(arg[1]));
  } else if (arg[0] == 'clear') {
    console.log(await cache.clear());
  } else if (arg[0] == 'delete') {
    console.log(await cache.delete('test-name'));
  }

}