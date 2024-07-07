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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_44_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYk5vOW9XMEhqL1IrcDNMRDgzdUV6d05zeDBSMjRiYWpET1lMUzNXSTZzUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFFrTk1tLVNRNzIwbUhDVXcybVZMUVwiLFxuICBcInBob25lSWRcIjogXCI5ZWUzYjFhZi01YjJmLTRjYTQtYmUwNy1lNDA0MmJmY2JlMjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAyNDcsXG4gICAgICA0NSxcbiAgICAgIDk1LFxuICAgICAgMTM0LFxuICAgICAgNzcsXG4gICAgICA4MixcbiAgICAgIDE1MCxcbiAgICAgIDE0MixcbiAgICAgIDgyLFxuICAgICAgMTUzLFxuICAgICAgMTE1LFxuICAgICAgMTI1LFxuICAgICAgMzAsXG4gICAgICAxMjMsXG4gICAgICA2NyxcbiAgICAgIDI0OCxcbiAgICAgIDEwMSxcbiAgICAgIDIwMyxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDM3LFxuICAgICAgMTI5LFxuICAgICAgNjUsXG4gICAgICA0NSxcbiAgICAgIDc5LFxuICAgICAgMjIxLFxuICAgICAgMTQxLFxuICAgICAgMTEyLFxuICAgICAgMjEsXG4gICAgICAyNDksXG4gICAgICA3MyxcbiAgICAgIDU3LFxuICAgICAgOSxcbiAgICAgIDIwMCxcbiAgICAgIDIzOSxcbiAgICAgIDIzNCxcbiAgICAgIDI0MixcbiAgICAgIDIxNixcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaOVA4UU5IRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4ODc4OTI0MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NjcxNDIzMDM2NjM0NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HSWhtUVFuUHlydEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUg0NHRqNTI5NWR6TG9rejRwSkhYQmEwazRlNFFRNStWa2g3ZUlROG9pOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0UlhjSGJMbTczanZmNjIxcmNqVi8xeGxjTnlZNXBUSlFrRGJRNnkzbEZyVTBSTG9yMnV6ZGtld0F0MlZBY1RxRHA3OFd2SVBQYzcxc1p3RDRMeHlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHZEFLYm5tUEhPK2JsZllrK1RQS0N1MWZRdVVVRDlpL0ZHQW5FNER2dHJDU2lScjdxT0RXNE1NWG5JZzFCZE13UEN4Z1ovcUk3YUhWTC8yTk1ub0FoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg4Nzg5MjQwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzg1MDU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWZ2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyc2NvUzdTSmVQdWp2emJ5UHpKUzc5NmFoTzRySlFTaGVjbjhoUC9rWW1RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTgxNDU5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjk1OTYzNzU4XCJ9Igp9"  // PUT your SESSION_ID 


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
