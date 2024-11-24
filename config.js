//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94727849423";
global.owner = process.env.OWNER_NUMBER || "94725469763";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxWZldydjJGWmt5ZVVlN3pFOHRQMkZIaUVJWmZHMlNPMFhEbXRHTnpWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVozNkJkV0dDZXg2UHdiWEtEc2NuVnBsZUhnaU5YYmk1ckpBVVpGSEtsYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTDh3c3A3dytTU2kvT1hSdHk1K3pRd3czV3A1UDVTYzlEQzM3ZGZ4K0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyV2ZIZER6bE9XbG9QZlRIcjh2cWFRb2JseHVxdlRuVmtwMzR6empXZVNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PaEJHM3NNMVV0UlBjQjNuSTF1R0gybXhJdnJFME03N2txenJlaUZoM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlXbWJianRTTTB0OFh2VzErVEpNOWMvSEt4MHV2cVJrY0dXV0E5VnY2M3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFYcG4vbUNDdmFmamMvL1lINzFlcEpuWVd1SmM3S2IxWnFzaXMrVTJFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXMyRTVGM3VvRTdnek5JWVIyM0UzTjYzTUpDS1NXbUdxeXl3T3hjdmpVVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCbTR2SHBEdFVXcHpCbGFNSHV2OXBKRUJXT3I5cVB6NlpiZUNxRDI1dEg1eXJEVVBHSVNOd3hJNWpNV1FGZE8zekE0Z29icElsRmx4dlBxQjRIQ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6Ik1rcG9ZMDgzVXpMSTNZeU5sS3dPOHA3UjFwNURoQmtrZ1RyL1JhRzBXMW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjU0Njk3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkUzNTRDMjgzN0MxNzlDOUVCQTRGMzBFM0IwNTNEMDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQ2ODk4Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjU0Njk3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMERCM0UxQzc4MTUwRDRGNjdCQzBCOUVBODNBRkE2QkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQ2ODk4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTjJLUTFqODNSQkcxT3BxbHdaMjUwdyIsInBob25lSWQiOiJhYzdmNGQ0ZS05YTI3LTRlZjQtOWExMi0xYjM2MjJhNGFjYzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjFTTW5CcTQvV1VhdHhFa0s2TlVmSDlHa25FPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ3VXZXay9nQWVrRmd3M25EcFplbzQrLzhpRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaUVlHWUZUVyIsIm1lIjp7ImlkIjoiOTQ3MjU0Njk3NjM6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlBpdTZjSEVPckJqYm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2U1S1pPZjJQblBwYjJ5NEk5ZjdhVC9yTUJEOE5nZ1Z6Nkd5eEgzREVRQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUHJQckFMZmxCalM1VjdydzN4T3BQZHcrMDd2OUJvM1B1SkpBRmdHdERqeEFGSjVKdS9SV2FEa1lKWkg1Vkt2MHpWdGpGcDd5QUgwcTJHSXJpT0gvQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImtZa25HYVVZODNtREIzSU5QMjUrY1RhZWt3aTJuRXNRejY2Wnp2ZW1jY2srNTdQVW45R050cFNlT0liLy9BLzF5bTIrLzhJQXpjd2pEaXUvMllTd2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjU0Njk3NjM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSHVTbVRuOWo1ejZXOXN1Q1BYKzJrLzZ6QVEvRFlJRmMraHNzUjl3eEVBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNDY4OTgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBLbCJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-KAVI-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "KAVIYH",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "KAVI-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "KAVI",
  errorChat: process.env.ERROR_CHAT || "94727849423",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
