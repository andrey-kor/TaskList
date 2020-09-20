
function CurrentDate(){

    let currentDate = ''

    let currentYear  = new Date().getFullYear().toString()
    let currentMonth  = new Date().getMonth() + 1
    let currentDay  = new Date().getDate().toString()

    if (currentMonth < 10) currentMonth = `0${currentMonth}`

    currentDate = `${currentYear}-${currentMonth}-${currentDay}`

    return currentDate
}

export default CurrentDate