const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
    name: "say",
    description: "Make me say whatever you want.",
    category: "funny",
    options: [{
        type: "string",
        name: "text",
        description: "Your text.",
        required: true,
        choices: []
    }],
    dm: false,
    run: async (client, interaction) => {

        const text = interaction.options.getString('text');

        if (/@everyone|@here/.test(text)) {
            return interaction.reply({ content: "That message contains blocked mentions.", ephemeral: true });
        }

        if (text.length > 500) {
            return interaction.reply({ content: "Your message is too long (max: 500 characters).", ephemeral: true });
        }

        interaction.reply({ content: "Sent!", ephemeral: true })
        interaction.channel.send({
            content: text,
            allowedMentions: {
                parse: []
            }
        })

    }
}
