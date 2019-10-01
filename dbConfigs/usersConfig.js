var Loki = require("lokijs")

// Initializing db
var telegramAlertBotDb = new Loki('Telegram CTI Alert Bot DB')
var users = telegramAlertBotDb.addCollection('users')

// Setting up the DataBase for users 
users.insert(
    [
     {
       name: "Alan Goh Zhao Xiong",
       phoneNumber: "6596932557",
       projects: ["BAX", "CXX", "DDX"],
       userRights: "Engineer"
     },
     {
       name: "Benedict Tan Chee Hui",
       phoneNumber: "6591249922",
       projects: ["BAX", "FGX", "GTS"],
       userRights: "Project Manager"
     }
    ]
   ); 

module.exports = users