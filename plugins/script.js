const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *HEART-HACKER ❤️*

> *SILENT-SOBX-MD REPO:*
*|* *https://github.com/SILENTLOVER40/SILENT-SOBX-MD*

> *SUPPORT GROUP:*
*|* *https://chat.whatsapp.com/Lbam2oVIfJFBBcUEU4Azwv*
*╰──────────────●●►*

> *POWERED BY HEART-HACKER ❤️*
`
await conn.sendMessage(from, { text: repo ,
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
title: 'HEART-HACKER-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/SILENTLOVER40/SILENT-SOBX-MD" ,
thumbnailUrl: "https://i.imgur.com/9dNYX42.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
