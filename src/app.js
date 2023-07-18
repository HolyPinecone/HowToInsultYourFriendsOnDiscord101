// use .env file
require("dotenv").config();

const { Client, Routes, GatewayIntentBits } = require("discord.js");

const commands = require("./commands");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

console.log("registering the following commands", Object.keys(commands));

client.on("interactionCreate", (interaction) => {
    console.log("running command", interaction.commandName);
    commands[interaction.commandName].execute(interaction);
});

// dont even let those mofos type without getting insulted
client.on("typingStart", (event) => {
    if (event.user.id === "someidhere") {
        event.channel.send("don't even start <@sameidhere>");
    }
});

client.on("messageCreate", (msg) => {
    // make sure we don't react to bot messages, they r fine they dont breathe
    if (msg.author?.bot) return;

    // make the bot insult someone everytime they send smth
    // let fuckYou = [
    //     "I'm <@ someones DC id> aNd Im a LitTlE BiTch.",
    //     "I'm <@ someones DC id> aNd I ShOulD MaYbE ShUt Up!",
    //     "I'm <@ someones DC id> aNd I aM sO vErY SmaRt.",
    // ];
    // if (msg.author.id === "put someones DC id here") {
    //     // MAY NOT BE DELETED UNDER ANY CIRCUMSTANCES !!! VERY MANY DANGEROUS
    //     let rnd = Math.floor(Math.random() * fuckYou.length);
    //     msg.channel.send(`${fuckYou[rnd]}`);
    //     return;
    // }

    // make a string variable and make message lowercase
    const content = msg.content.toLowerCase();
    const sanitized = content.replace(
        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
        ""
    );
    const tokens = new Set(sanitized.split(" "));

    //mega funny ways to make the bot insult everyone on the server based on stupid shit they say:
    const triggers = {
        "crazy": "crazy? i was crazy once. they locked me in a room. a rubber room. a rubber room filled with rats and the rats made me crazy.",
        "toxic": "why you being toxic? personally i would never.",
        "hi": "no, shut up, go away.",
        "hello": "no, shut up, go away.",
        "hey": "no, shut up, go away.",
        "morning": "quiet, go back to sleep.",
        "night": "sleep is for the weak pussy.",
        "gm": "quiet, go back to sleep. U still seem to be too tired to write u lazy fuck.",
        "gn": "no need to wake up until you start writing properly you lazy fuck.",
        "imagine": "stop imagining pussy, this is reality.",
        "bye": "bye! no need to come back!",
        "food": "no food for you, you fat fuck!",
        "eat": "no food for you, you fat fuck!",
        "surströmming": "ew wtf stop opening your legs. you nasty hoe."
    }

    Object.entries(triggers).forEach(item => {
        if (tokens.has(item[0])) {
            msg.channel.send(item[1])
        }
    })
    
});

(async () => {
    const token = process.env.DISCORD_TOKEN;
    if (!token) throw new Error("Invalid token");

    await client.login(token);

    await client.rest.put(Routes.applicationCommands(client.user.id), {
        body: Object.values(commands).map((ch) => ch.definition),
    });

    console.log(`[${new Date().toISOString()}] bot up and running`);
})();
