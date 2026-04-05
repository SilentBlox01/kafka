const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    name: "roll",
    description: "Roll a dice.",
    category: "funny",
    options: [],
    dm: false,
    run: async (client, interaction) => {
        
        let dice = Math.floor(Math.random() * 6) + 1

        interaction.reply(`🎲 **${dice}**`)

    }
}
