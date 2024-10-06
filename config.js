//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFGSXA0cHVhdnUrOHhiUWRnaGZGdmRVcjltNHhIeVk1dzlIVVVwWGhrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDRtanlIV082Ujh0SUJsZy80Y1R5TTFFQjFpRWs2MmprMm1hSmgybzRETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxREVLcnlqUFZNTWtYM0ozLzV1bkUwOW9HMzEzU1Z0dGdrL2d3RHM4dGxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRmo3bldkR0h1Z2k4RXQ5am9CUjNvVzJIUkRML0kyQVFDZkRJZHFqZHprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IZkd6MnV6ejRXaTMyS1EzUXhzaXFxcmdCQVdzMmV1UUlSTjlzRnIwRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhIM2RCcGtZVTdCMHdkeDhLSC9DNWFlVEU5SHR2M0dpVE80TGhNWkNlQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUkrUVhya1JSREZsM0pzWm15MkhZaUswRDlIMy9Edloya0UzZnNySFdFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2N1TEppZzZ5SFR0ejF4U1VhSWZxNE9IVmQvWkczc0Z4Z2hUa2VLempSYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik90WmxTU1BPdXBkd2dUQnVCeU5meHNYM0IzZTdVRGpkWjFiZWFaZmhmc1pibFQvNlFML3V5TTRkZ3FGazJLYjhNSWVGVk8veEpDTVlraWltdzBQZkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiODQ5c2JDSTdPdHJlRDFxV2ZJUlpXbU5Bd2htVWkxajgydy9MdXhTTGJKST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia3lRRjQwNjFRRVdrSmlJVE1lSEJPUSIsInBob25lSWQiOiIyMzYwNjI2MC01ZDNhLTRkOGEtOGZlMy02OWRmOTdjNmJiMjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVytVNjk1anBuT29qY2k2K0QxbjNDSzdrc2l3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im84THhpSktyNmlkVnVEUmllQVdHcVdQcG9tST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFN1ZQNVI0NSIsIm1lIjp7ImlkIjoiOTE3ODcyMzIzMzAzOjg3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOAkEHjgJHjgJBU44CR44CQQeOAkeOAkE7jgJHjgJBV44CRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdnVqcTBGRU0zY2lyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4enJhYmlVWFhjVWZNQSs1WmcydGxIMDFmN05mZnQwSk4wVllXdS9JQmdRPSIsImFjY291bnRTaWduYXR1cmUiOiJFSnlRNk1YVnEyWkM0QTVGK21hRmpNU3hTaW9EMFkyZVpNQlVaczU0Y0lIRFp3ckRlUUtDWkdOTktVK1lTcnRuRUlXYzZkdW0xMmZ3eU5wN3NFS29Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMDg0QmhuYXZDb1RmR1RIVWlGQ0ppVm4vRGo0cWIyeC9NN3JNTFVaNVZDV1Z6aVpmZml1MXNrS0Y3SWRXaUdSdEY3NWZmb1FqdnQwY3UyeTIzblFIQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc4NzIzMjMzMDM6ODdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2M2Mm00bEYxM0ZIekFQdVdZTnJaUjlOWCt6WDM3ZENUZEZXRnJ2eUFZRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODIyODk1NX0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
