const axios = require('axios')

var users = require('../dbConfigs/usersConfig')
var cti = require('../dbConfigs/ctiConfig')

const logInMessage = require('./logInMessage')
const projectSelection = require('./projectSelection')


function login(message, res) {
    // search db for contact match
    var logInDetails = users.findOne({phoneNumber: message.contact.phone_number})

    // Provides fork for invalid registration number
    if (logInDetails !== null) {
    
      logInMessage(message,res) // Displays Log in Message 

      // Unwinds Project Array
      for (var i=0; i<logInDetails.projects.length; i++) {
        // Counts Incomplete CTI Statuses
        var projectStatus = cti.find({ projects: { '$contains' : logInDetails.projects[i] }})
        var incompleteCount = 0
        for (var j=0; j<projectStatus.length; j++) {
        if (projectStatus[j].status === "Incomplete") {
          incompleteCount++
        }
      }
        // Sends out message
        axios
          .post(
            'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
            
            {
              chat_id: message.chat.id,
              text: "/" + logInDetails.projects[i] + "  -----  " + incompleteCount +" Incomplete CTIs"
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
        
  } // Forks non-registered number
  else {
    // Sends out message
    axios
      .post(
        'https://api.telegram.org/bot946015043:AAGKs5Tbtm_-V0xLWD80CJDxMLqBE-r7ekQ/sendMessage',
        {
          chat_id: message.chat.id,
          text: "Apologies, your number is not registered with me. Please contact the System Adminstrator at jeremy.limzw@stengg.com for further help.",
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

    // Initializes project selection menu
    projectSelection(message, res)
    
}

module.exports = login