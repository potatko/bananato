const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Vymaže daný počet správ')
        .addIntegerOption(option => option.setName('pocet').setDescription('Počet správ na vymazanie').setMinValue(1).setMaxValue(100).setRequired(true)),
	async execute(interaction) {
		
        const pocet = interaction.options.getInteger('pocet');
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) await interaction.reply({content: "Nemáš práva na vymazanie správ", ephemeral: true});
        if (!pocet) return await interaction.reply({content: "Zadaj počet správ na vymazanie", ephemeral: true});
        if (pocet > 100 || pocet < 1) return await interaction.reply({content : "Vyber počet medzi 1 a 100", ephemeral: true});
        
        await interaction.channel.bulkDelete(pocet).catch(err =>{
            return;
        });

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:saluting_face: Vymazaných  **${pocet}**  správ.`)

        await interaction.reply({embeds: [embed]}).catch(err => {
            return
        })
    },
};