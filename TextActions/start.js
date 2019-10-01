const axios = require('axios')
// Initializes chat
function start(message, res) {
  // Sends message
axios
    .post(
      'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
      
      {
        chat_id: message.chat.id,
        text: 'Hello! Welcome to the CTI Bot, please proceed to register with your phone number.',
         reply_markup: {
            resize_keyboard: true,
            keyboard: [
              [{
              text: "Yes",
              request_contact: true
              }],
              ['No']]
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

module.exports = start