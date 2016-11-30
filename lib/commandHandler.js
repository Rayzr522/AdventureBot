class CommandHandler {
    constructor() {
        this.commands = {};
    }
    getCommand(id) {
        return this.commands[id];
    }
}

module.exports = CommandHandler;
