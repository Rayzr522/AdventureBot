class CommandHandler {
    constructor() {
        this.commands = {};
    }
    getCommand(id) {
        console.log('Attempting to get command with ID "' + id + '"')
        return this.commands[id];
    }
    addCommand(id, command) {
        this.commands[id] = command;
    }
}

module.exports = CommandHandler;
