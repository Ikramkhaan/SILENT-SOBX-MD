const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "muJB1RxZ#tPN2jJw0CE1u2WccUj1CIXo39RRMHTNChTMPh80MYY4",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/9dNYX42.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "alive https://i.imgur.com/9dNYX42.jpeg
┌───〈  *𝚫𝚩𝚯𝐔𝚻 𝚳𝚵* 〉───◆
│╭─────────────···▸
┴│▸ *𝔸𝕊𝕊𝔸𝕃𝔸𝕄 𝕆 𝔸𝕃𝔸𝕀𝕂𝕆𝕄* ❤️
⬡│
⬡│▸ *ℍ𝕆𝕎 𝔸ℝ𝔼 𝕐𝕆𝕌  ☺️💓*
⬡│
⬡│▸ *𝕀'𝕄 𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮  ❤️*
⬡│
⬡│▸ #quote
⬡│
⬡│▸ *𝕃𝔼𝕋'𝕊 𝔹𝔼 𝔽ℝ𝕀𝔼ℕ𝔻𝕊 😉*
⬡│
⬡│▸ *𝕊𝔸𝕍𝔼 𝕄𝕐 ℕ𝕌𝕄𝔹𝔼ℝ 👇🏻👇🏻👇🏻👇🏻*
⬡│
┬│▸ *ℂ𝕆ℕ𝕋𝔸ℂ𝕋 𝕄𝔼 https://wa.me/+923193619280*
│╰────────────···▸▸
└───────────────···▸
#uptime",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "HEART-HACKER ❤️",
};
