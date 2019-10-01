var Loki = require("lokijs")

// Initializing db
var telegramAlertBotDb = new Loki('Telegram CTI Alert Bot DB')
var cti = telegramAlertBotDb.addCollection('cti')

// Setting up DataBase for CTI
cti.insert(
    [
      {
        name: "CTI Alert TIS-2019-0047-1",
        description: "Advisory on Abuse of Amazon Web Services (AWS) Metadata Service with Server Side Request Forgery (SSRF)",
        cve: [],
        status: "Completed",
        createdBy: "Alan Goh Zhao Xiong",
        releaseDate: Date.now(),
        projects: ["BAX","CXX","DDX","FGX","GTS"]
      }, 
      {
        name: "CTI Alert TIA-2019-0191-1",
        description: "Multiple Cisco Vulnerabilities",
        cve: [
          {
            name: "CVE-2019-1738",
            status: "Completed",
            scheduleDate: undefined,
            scheduleDescription: undefined,
            updatedBy: "Benedict Tan Chee Hui",
            updateTime: Date.now()
          },
          {
            name: "CVE-2019-1739",
            status: "Scheduled",
            scheduleDate: undefined,
            scheduleDescription: undefined,
            updatedBy: "Benedict Tan Chee Hui",
            updateTime: Date.now()
          },
          {
            name: "CVE-2019-1740",
            status: "Incomplete",
            scheduleDate: undefined,
            scheduleDescription: undefined,
            updatedBy: "Alan Goh Zhao Xiong",
            updateTime: Date.now()
          }
        ],
        status: "Incomplete",
        createdBy: "Alan Goh Zhao Xiong",
        releaseDate: Date.now(),
        projects: ["BAX","CXX","DDX","FGX","GTS"]
      }
    ]
  )

module.exports = cti