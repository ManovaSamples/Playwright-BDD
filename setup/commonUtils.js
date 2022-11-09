class commonUtils{

    getDate(){
        const date = new Date()
        const currentYear = date.getFullYear().toString()
        const currentMonth = date.getMonth()+1
        const currentDate = date.getDate().toString()
        const newDate = currentDate.concat(currentMonth.toString()).concat(currentYear)
        const currentHour = date.getUTCHours().toString()
        const currentMin = date.getUTCMinutes().toString()
        const currentSec = date.getUTCSeconds().toString()
        const newTime = currentHour.concat(currentMin).concat(currentSec)
        const newDateformat = newTime.concat(newDate)
      //  console.log("New Date format-> "+ newDateformat)
        return newDateformat.toString()
        
    }
    
    getTime(){
        const date = new Date()
        const currentHour = date.getUTCHours().toString()
        const currentMin = date.getUTCMinutes().toString()
        const currentSec = date.getUTCSeconds().toString()
        const newTime = currentHour.concat(currentMin).concat(currentSec)
        //console.log("New Date format-> "+ newTime)
        return newTime.toString()
        
    }

}

module.exports = { commonUtils }