const BaseCommand = require('../base/base-command')

//These r lowkey violent songs man
const randURLs = [
    "https://open.spotify.com/track/3XwdN6SAaadkJTYzcfv93B?si=WqZ9OR91SvGRHRLPtC9Rrw",
    "https://open.spotify.com/track/7sxiG6BuAb28nh3qGmbz7L?si=mK-V4feaQp6juFk1je1Miw",
    "https://open.spotify.com/track/4vWB3h09KFwuS62Ex7NllR?si=gQBc5oHFRPqdix_YAVCIOw",
    "https://open.spotify.com/track/6A2f2zK7E808HMHbygl9gD?si=ff01c579ab9b4a76",
    "https://open.spotify.com/track/3P1w3tnyexMjfY0Eh8spEI?si=240b7afde4084b8f",
    "https://open.spotify.com/track/6IGW65U5D0k1yshtc8M0PW?si=b08ab18bb6774674",
    "https://open.spotify.com/track/5bU4KX47KqtDKKaLM4QCzh?si=384c624cbf2f4602",
    "https://open.spotify.com/track/37mfTcSlX60JtAvAETytGs?si=3ec876eba9bb4b81",
    "https://open.spotify.com/track/3R8PKPTPgHApBhCt3NUJ0q?si=b5156e5711d34159",
    "https://open.spotify.com/track/66m3fGaQrDichM7Sokktfy?si=e00c908026384735",
    "https://open.spotify.com/track/4oeEDQbIZN5seEtYRJS7kk?si=7db2e9464f28458a",
    "https://open.spotify.com/track/2ATALIz9VluPLPStx2pwnu?si=39de94c53b26459e",
    "https://open.spotify.com/track/6VOM9VW2HspbL77jPEaBxW?si=6a6c1a37e72d43a2",
    "https://open.spotify.com/track/3R8PKPTPgHApBhCt3NUJ0q?si=5f1181125bfd41c7",
    "https://open.spotify.com/track/1QrIPQyOGl0wTilfU57weG?si=844fc10a7e5549af",
    "https://open.spotify.com/track/168wlfnWuhfvgfgeuz7vZO?si=c9c0286a235b4c43",
    "https://open.spotify.com/track/1sThVsuJyATcf2DfoLxhT3?si=770ac622e8ba4033",
    "https://open.spotify.com/track/5131e64A4Ez0j4FhO9WXlD?si=1fb8831650e74543",
    "https://open.spotify.com/track/4NErFt2z3QuQGHVyQck2Ru?si=8369f9374a1a43c5",
    "https://open.spotify.com/track/5V1yFtT4ReyOupoHvykaBd?si=add42d99357e4f6d",
    "https://open.spotify.com/track/3UgZA53hNSPbwtNJ7x8Bd9?si=584b9ac435494b53",
    "https://open.spotify.com/track/4KD6aCWhLh9gUUy7oxFeqA?si=f137555a4cc24c43",
    "https://open.spotify.com/track/24CeaRaJHiMKFAVZTCu8Y0?si=26e98d45844b4afa",
    "https://open.spotify.com/track/7bCfHiRcfUjG0YVVNUL7Ve?si=8d313c03f0f947bb",
    "https://open.spotify.com/track/21Q89OzFYAcYSNurWhz3Rk?si=a787eee3c6024561",
    "https://open.spotify.com/track/4Fqy2uZfTgX41UXWRcYqLk?si=28540ce5eefe4a92",
    "https://open.spotify.com/track/2B49Zt5DvRujMHhCiBALOC?si=f9f6770b4b884fa3",
    "https://open.spotify.com/track/0M56diRArdi0vRYmLBeltn?si=de2421cf9d484aac",
    "https://open.spotify.com/track/4KD6aCWhLh9gUUy7oxFeqA?si=9e8cbbc91d284de9",
    "https://open.spotify.com/track/1xK59OXxi2TAAAbmZK0kBL?si=0a811db5d4194495",
    "https://open.spotify.com/track/0ymSV3rbBr6jfNl44twiOb?si=771e4e7cd9174b21",
    "https://open.spotify.com/track/70fiaCGcCBWCGKXXISgdJf?si=59503a2d68224d9c",
    "https://open.spotify.com/track/6pCkJ0r6WEyz5ASErk5ezS?si=8290d18b4b684368",
    "https://open.spotify.com/track/6RcsAN8XF5KX6mMh6dum8e?si=5b707d50761c4bfd"
];

class SongCommand extends BaseCommand {

    get definition() {
        return {
            name: 'song',
            description: 'random violent song'
        }
    }

    execute(interaction) {
        let randNumber = Math.floor(Math.random()*randURLs.length);
        interaction.reply(`${randURLs[randNumber]}`);
    }
}

const songCommandHandler = new SongCommand();
module.exports = songCommandHandler;