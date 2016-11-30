const Command = require('../command.js');

class CommandPing extends Command {
    constructor() {
        super('ping', 'Pings the bot');
    }

    execute(context) {
        context.reply("pong!");
    }
}

module.exports = CommandPing;
