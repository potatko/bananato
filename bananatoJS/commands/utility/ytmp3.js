const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ytmp3')
		.setDescription('Stiahne youtube video vo formáte mp3')
        .addStringOption(option => option.setName('video-url').setDescription('URL youtube videa').setRequired(true)),
	async execute(interaction) {
        
        await interaction.deferReply({ephemeral: true});

        const { options } = interaction;
        const vidUrl = options.getString('video-url'); 
        const videoIdRegex = /[?&]v=([^&]+)/;
        const match = vidUrl.match(videoIdRegex);
        const vidId = match[1];
   
       
        const input = {
            method: 'GET',
            url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
            params: {id: vidId},
            headers: {
                'X-RapidAPI-Key': '676e2da289mshb581f453879883bp1a4366jsna8f021422a32',
                'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(input);

            const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setLabel('Stiahni MP3')
                .setStyle(ButtonStyle.Link)
                .setURL(response.data.link)
            );

            const embed = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`Klikni nižšie pre stiahnutie mp3 videa: \`${response.data.title}\``)

            await interaction.editReply({embeds: [embed], components: [button]});

        } catch (e){
            await interaction.editReply({content: `Video neexistuje alebo nastala chyba`});
        }
	},
};