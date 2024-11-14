const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let owner =` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮*
*AGE:-* *22 YEARS*
*PUBLIC NAME:-* *HEART-HACKER*

> *BY HEART-HACKER ❤️*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "HEART-HACKER",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'HEART-HACKER',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+923193619280?text=HY 𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮 I'M MSG YOU FROM OWNER ADS" ,
thumbnailUrl: "https://i.imgur.com/9dNYX42.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
