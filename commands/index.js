const commandHandlers = [
    require('./insult-command'),
    require("./meme-command"),
    require("./song-command"),
    require("./crazy-command")
]

const handlers = commandHandlers.reduce((pv, cv) => ({...pv, [cv.definition.name]: cv}), {});

module.exports = handlers;