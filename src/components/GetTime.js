export default function GetTime() {
    let time = new Date();
    time = time.toLocaleString('en-GB', { formatMatcher: `basic`, timeZone: 'Europe/London' });
    time = time.toString().slice(12, 22)
    const splitTime = time.toString().split(":")
    const hour = parseInt(splitTime[0]), minute = parseInt(splitTime[1]), second = parseInt(splitTime[2])
    let format = "";
    let timeOfDay = "";
    let minutes = ""
    if(minute < 10) { minutes += `0${minute}` } else { minutes += `${minute}` }
    if(hour >= 13) { 
        timeOfDay = "PM"; 
        format = `${hour - 12}:${minutes}` 
    } else { 
        timeOfDay = "AM"; 
        format = `${hour}:${minutes}` 
    }
    format += " " + timeOfDay
    return format
}