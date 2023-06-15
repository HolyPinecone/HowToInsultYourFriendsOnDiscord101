const BaseCommand = require("../base/base-command");

class CrazyCommand extends BaseCommand {
    get definition() {
        return {
            name: "crazy",
            description: "this is crazy",
        };
    }

    execute(interaction) {
        interaction.reply(
            "Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room filled with rats and the rats made me crazy."
        );
    }
}

const crazyCommandHandler = new CrazyCommand();
module.exports = crazyCommandHandler;
