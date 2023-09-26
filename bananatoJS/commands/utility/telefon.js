const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('telefon')
		.setDescription('Telefónny zoznam'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
        .setColor("Purple")
        .setDescription(`
        Mara:
        Ela Killer: 0948 767 533 
        tut: 0915 494 688
        Lolo: 0944 363 993 
        Filip Sabovčík: 0915 610 520
        Brankoj: 0944 629 565
        Andrej Smižany: 0907 721 450
        Potato: 0903 935 990
        Dušan: 0902 070 044
        Bajus: 0902 442 229
        Mirka: 0903 350 905
        GABO: 0917 726 700
        Sima: 0948 620 044
        Peťa: 0949 222 967
        Šimon Širila: 0944 897 008
        Jakub Vlk: 0915 334 017
        HamborLOL: 0950 424 768
        Tokarcik/FEXE: 0902 623 188
        Samko z levoce: 0910 598 596
        Jopolom: 0905 318 390
        Martynko: 0944 709 923
        Gondeks: 0959 605 270
        :telephone:`)

        await interaction.reply({embeds: [embed]}).catch(err => {
            return
        })


	},
};