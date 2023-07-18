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

    // make a string variable and make message lowercase
    const content = msg.content.toLowerCase();
    const sanitized = content.replace(
        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
        ""
    );
    const tokens = new Set(sanitized.split(" "));

    // make the bot insult someone everytime they send smth
    let fuckYou = [
        "I'm <@ someones DC id> aNd Im a LitTlE BiTch.",
        "I'm <@ someones DC id> aNd I ShOulD MaYbE ShUt Up!",
        "I'm <@ someones DC id> aNd I aM sO vErY SmaRt.",
    ];
    if (msg.author.id === "put someones DC id here") {
        // MAY NOT BE DELETED UNDER ANY CIRCUMSTANCES !!! VERY MANY DANGEROUS
        let rnd = Math.floor(Math.random() * fuckYou.length);
        msg.channel.send(`${fuckYou[rnd]}`);
        return;
    }
    //mega funny ways to make the bot insult everyone on the server based on stupid shit they say:
    if (tokens.has("crazy")) {
        msg.channel.send(
            "Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room filled with rats and the rats made me crazy."
        );
    }
    if (tokens.has("toxic")) {
        msg.channel.send("Why you being toxic? Personally I would never.");
    }
    if (content === "hi") {
        msg.channel.send("no, shut up, go away");
    }
    if (tokens.has("hello")) {
        msg.channel.send("no, shut up, go away");
    }
    if (content === "hey") {
        msg.channel.send("no, shut up, go away");
    }
    if (tokens.has("morning")) {
        msg.channel.send("quiet, go back to sleep");
    }
    if (content === "gm") {
        msg.channel.send(
            "quiet, go back to sleep. U still seem to be too tired to write u lazy fuck."
        );
    }
    if (tokens.has("night")) {
        msg.channel.send("sleep is for the weak pussy");
    }
    if (content === "gn") {
        msg.channel.send(
            "No need to wake up until you start writing properly you lazy fuck."
        );
    }
    if (tokens.has("imagine")) {
        msg.channel.send("Stop imagining pussy, this is reality");
    }
    if (tokens.has("bye")) {
        msg.channel.send("bye! No need to come back!");
    }
    if (tokens.has("food")) {
        msg.channel.send("No food for you, you fat fuck!");
    }
    if (tokens.has("eat")) {
        msg.channel.send("No food for you, you fat fuck!");
    }
    if (tokens.has("surströmming")) {
        msg.channel.send("Ew wtf stop opening your legs. U nasty hoe.");
    }
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
