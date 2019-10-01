const axios = require('axios')
// Processes unknown messages
function unrecognized(message, res) {
  // Sends message
axios
    .post(
      'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
      {
        chat_id: message.chat.id,
        text: 'Sorry, I do not understand your request. Please use the commands and buttons provided or use /help for more information. Thank you!',
        reply_markup: {
          remove_keyboard: true,
        }
      }
    )
    .then(response => {
      console.log('Message posted')
      res.end('ok')
    })
    .catch(err => {
      console.log('Error :', err)
      res.end('Error :' + err)
    })
}

module.exports = unrecognized