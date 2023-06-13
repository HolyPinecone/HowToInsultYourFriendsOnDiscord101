const insulter = require("insult");

const BaseCommand = require("../base/base-command");

class InsultCommand extends BaseCommand {
    get definition() {
        return {
            name: "insult",
            description: "Random insults",
        };
    }

    execute(interaction) {
        interaction.reply(`${insulter.Insult()}`);
    }
}

const insultCommandHandler = new InsultCommand();
module.exports = insultCommandHandler;
