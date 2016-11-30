const Discord = require('discord.js');
const CommandHandler = require('./commandHandler.js');
const config = require('../config.js');

const client = new Discord.Client();

const AdventureBot = {
    prefix: config.prefix,
    commandHandler: new CommandHandler()
};

client.on('ready', () => {
    console.log('Client loaded:', client.user.username);
});

client.on('message', message => {
    if (message.content.startsWith(AdventureBot.prefix)) {
        var command = AdventureBot.commandHandler.getCommand(message.content.substring(AdventureBot.prefix.length));
        if (command && command.execute && typeof command.execute === 'function') {
            command.execute();
        }
    }
});

// client.login('MjUzMjk0MDg0OTQzMzgwNDgw.Cx-eaA.05Aa1hqOHE32XhAQBdtoj-HpK4M');
client.login(config.token);
