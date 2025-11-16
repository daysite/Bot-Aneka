import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//owner
global.owner = [
['18294922391'],
['5493884539290'],
['5493884539290'],
['5493884539290'],
['18294922391'],
['18294922391'],
['18294922391']
]

//Información 
globalThis.info = {
wm: "𝓐𝓷𝓮𝓴𝓪 𝓑𝓸𝓽",
vs: "2.0.0",
packname: "𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦❤️‍🔥 - LoliBot\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
author: "Owner: @elrebelde21\n• Dueña: @itschinita_official",
apis: "https://api.delirius.store",
apikey: "GataDios",
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
img2: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg",
img4: fs.readFileSync('./media/Menu2.jpg'),
yt: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2",
tiktok: "https://www.instagram.com/anekita.dzn?igsh=a3c0NDlqaGdoMmlv",
md: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2",
fb: "https://www.instagram.com/anekita.dzn?igsh=a3c0NDlqaGdoMmlv",
ig: "https://www.instagram.com/anekita.dzn?igsh=a3c0NDlqaGdoMmlv",
nn: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //Grupo ofc1
nn2: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //Grupo ofc2
nn3: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //Colab Loli & Gata
nn4: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //Enlace LoliBot
nn5: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //A.T.M.M
nn6: "https://chat.whatsapp.com/JydqOKu1AA399bMJOluzY2", //Dev support 
nna: "https://whatsapp.com/channel/0029VbBUF7aGzzKZMjHgtZ1z",
nna2: "https://whatsapp.com/channel/0029VbBUF7aGzzKZMjHgtZ1z"
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
