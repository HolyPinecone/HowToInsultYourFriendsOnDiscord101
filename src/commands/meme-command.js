const BaseCommand = require("../base/base-command");

let memes = [
    "https://go.find.your/own/SOURCE/of/memes.png",
    "https://am.not.your/fucking/meme/bank/you-lazy.fuck",
];

class MemeCommand extends BaseCommand {
    get definition() {
        return {
            name: "meme",
            description: "Sends a random meme",
        };
    }

    execute(interaction) {
        let rnd = Math.floor(Math.random() * memes.length);
        interaction.reply(`${memes[rnd]}`);
    }
}

const memeCommandHandler = new MemeCommand();
module.exports = memeCommandHandler;
