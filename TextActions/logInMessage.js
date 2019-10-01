const axios = require('axios')
var users = require('../dbConfigs/usersConfig')

// Processes Log in Message

function logInMessage(message,res) {
  // Finds User's name for text output
  var logInDetails = users.findOne({phoneNumber: message.contact.phone_number})

  // Sends Message
 axios
    .post(
      'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
      {
        chat_id: message.chat.id,
        text: "Welcome back,\n" + logInDetails.name + ".\n" + "Please select a project listed below.\n",
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

module.exports = logInMessage