const moment = require('moment-timezone');

function formatMessage(username, text) {
   return {
      username,
      text,
   
      time: moment().tz('Asia/kolkata').format('h:mm a')
   };
}
setInterval(formatMessage,1000);
module.exports = formatMessage;
