//i assume u dont understand u gotta add the commands here for them to wörk
const commandHandlers = [
    require("./insult-command"),
    require("./meme-command"),
    require("./song-command"),
    require("./crazy-command"),
];

const handlers = commandHandlers.reduce(
    (pv, cv) => ({ ...pv, [cv.definition.name]: cv }),
    {}
);

module.exports = handlers;
