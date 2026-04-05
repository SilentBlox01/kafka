const Discord = require("discord.js");

module.exports = {
    async run(client, interaction) {
        const selectedCategory = interaction.values[0];
        const list = client.slashCommands.filter(cmd => cmd.category == selectedCategory);
        const commandList = list.size ? list.map(cmd => cmd.name).join("\n") : "None";
        const categoryTitles = {
            administration: "Administration commands",
            configuration: "Configuration commands",
            funny: "Funny commands",
            information: "Information commands",
            moderation: "Moderation commands",
            search: "Search commands",
            utility: "Utility commands"
        };

        const embed = new Discord.EmbedBuilder()
        .setColor(client.config.EMBEDCOLOR)
        .setAuthor({ "name": `• ${client.user.username} - Help Menu`, "iconURL": client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }) })
        .setFooter({ "text": interaction.member.user.tag, "iconURL": interaction.member.user.displayAvatarURL({ dynamic: true, size : 1024, format: "png" })})
        .setTimestamp()
        
        if (!categoryTitles[selectedCategory]) return;

        embed.setTitle(`**${categoryTitles[selectedCategory]}**`)
        .setDescription(`>>> \`${commandList}\``)

        await interaction.update({ embeds: [embed] })

    }
}
