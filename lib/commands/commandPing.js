const Command = require('../command.js');

class CommandPing extends Command {
    constructor() {
        super('ping', 'Pings the bot');
    }

    execute(context) {
        console.log('I got executed!');
    }
}

module.exports = CommandPing;
