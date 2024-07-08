const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_12_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICA2MixcbiAgICAgICAgNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRIUFRTRmlYYWoxY1RLRitydTFiMEdNL3BVOEpGUnpHMW45UHE5N1huNzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImh1VDVzem5pUXltWUZnRUFPTmpJRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VjYjM1MzUtMGJmYi00MDVkLTgxNDEtMGRlZjQwNjRmNzZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDQsXG4gICAgICA5OSxcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMTA2LFxuICAgICAgMTQ1LFxuICAgICAgOTUsXG4gICAgICAxNyxcbiAgICAgIDEwOCxcbiAgICAgIDE4LFxuICAgICAgNzYsXG4gICAgICAxNTQsXG4gICAgICAyMTMsXG4gICAgICAzMixcbiAgICAgIDE5MSxcbiAgICAgIDE4NCxcbiAgICAgIDYzLFxuICAgICAgMTY4LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMjAwLFxuICAgICAgMTA0LFxuICAgICAgMjIwLFxuICAgICAgOTMsXG4gICAgICAyNTIsXG4gICAgICAxMTYsXG4gICAgICA0MyxcbiAgICAgIDE2OCxcbiAgICAgIDE0OCxcbiAgICAgIDIyNCxcbiAgICAgIDMyLFxuICAgICAgMjQ1LFxuICAgICAgMTMxLFxuICAgICAgMTQ1LFxuICAgICAgMjQ5LFxuICAgICAgMTQzLFxuICAgICAgOTYsXG4gICAgICA3OSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg0TTRZNkhRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg4Nzg5MjQwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2NzE0MjMwMzY2MzQ1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdJaG1RUTI5cXV0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFSDQ0dGo1Mjk1ZHpMb2t6NHBKSFhCYTBrNGU0UVE1K1ZraDdlSVE4b2k4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVTQWQ5RThJbVN6LzA4VUthejdUNFVCbUVxZDNOeStqN2h5Y1YxeFU3MTUxVzZNSlZ3MHgxSlNoK3RiaGl3S1lOVWoyaUgvaEhVdldJcDVlWk1uekJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFrOWtjMHR0MnNIOEk0MHdZR050angwd2N1TkR6YXh3SXFjbmV0d3lSdE1GQ2Q1MzhCdXZVRnRuVkUzczVyUnJaazV2WTE5ZHVoL1VQOTRUdlUvOGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODg3ODkyNDA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0Mjk5MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVmdi5qc29uIjogIntcImtleURhdGFcIjpcIjJzY29TN1NKZVB1anZ6YnlQekpTNzk2YWhPNHJKUVNoZWNuOGhQL2tZbVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5ODE0NTkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
