const BaseCommand = require("../base/base-command");

const triggers = require("../consts/triggers");

class TriggersCommand extends BaseCommand {
    get definition() {
        return {
            name: "triggers",
            description:
                "returns a list of all the trigger words i will respond",
        };
    }

    execute(interaction) {
        interaction.reply(Object.keys(triggers).sort().join(", "));
    }
}

const triggersCommandHandler = new TriggersCommand();
module.exports = triggersCommandHandler;
