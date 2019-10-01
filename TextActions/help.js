const axios = require('axios')
// Processes help command
function help(message, res) {
  // Sends Message
axios
    .post(
      'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
      {
        chat_id: message.chat.id,
        text: 'Welcome to the CTI Alert Bot, My name is Monica and I will be your CTI Virtual Assistant for today.' + "\n" + "Use /start to begin or /help for a list of help commands"
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
    module.exports = help