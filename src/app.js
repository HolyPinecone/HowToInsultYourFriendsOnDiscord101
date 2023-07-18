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

const triggers = require("./consts/triggers");

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

    Object.entries(triggers).forEach((item) => {
        if (tokens.has(item[0])) {
            msg.channel.send(item[1]);
        }
    });
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
