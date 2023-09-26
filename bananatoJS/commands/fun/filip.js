const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('filip')
		.setDescription('Náhodna fotka malého filipa'),
	async execute(interaction) {
        filipfotky = ["https://cdn.discordapp.com/attachments/315892634549878784/813134943118426142/depreson.PNG",
            "https://cdn.discordapp.com/attachments/315892634549878784/813134951099662336/Screenshot_20201109_175539_com.snapchat.android.jpg",
            "https://cdn.discordapp.com/attachments/315892634549878784/813134927209168976/image0.png",
            "https://cdn.discordapp.com/attachments/315892634549878784/813134960206020628/Screenshot_20201115_222838_com.zhiliaoapp.musically.jpg",
            "https://cdn.discordapp.com/attachments/315892634549878784/813134934826418226/IMG_20201016_145824.png",
            "https://cdn.discordapp.com/attachments/310097054426857492/754638612842151936/Snapchat-1991353265.jpg",
            "https://cdn.discordapp.com/attachments/315892634549878784/813135037566156811/kok.png",
            "https://cdn.discordapp.com/attachments/315892634549878784/813135064908169286/bot.jpg",
            "https://cdn.discordapp.com/attachments/821143470654619688/821143499901501470/image0.png",
            ]
        function randomChoice(arr) {
            return arr[Math.floor(arr.length * Math.random())];
        }
		await interaction.reply(randomChoice(filipfotky));
	},
};