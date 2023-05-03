function MostFreeTime(strArr) { 

const times = strArr.map(timeStr =>{
  const [start, end] = timeStr.split("-");
  const [startHour, startMinute] = start.slice(0, -2).split(":").map(Number);
  const [endHour, endMinute] = end.slice(0, -2).split(":").map(Number);
  const startMinutes = startHour % 12 * 60 + startMinute + (start.endsWith("PM") ? 720 : 0)
  const endMinutes = endHour % 12 * 60 + endMinute + (end.endsWith("PM")? 720 : 0);
  return {start: startMinutes, end: endMinutes};
})

times.sort((a,b) => a.start - b.start);

let longestTime = 0;
for (let i = 1; i < times.length; i++){
  const freeTime = times[i].start - times[i -1].end;
  if (freeTime > longestTime){
    longestTime = freeTime;
  }
}

const hours = Math.floor(longestTime/60);
const minutes = longestTime % 60;
const formattedHours = hours.toString().padStart(2, "0");
const formattedMinutes = minutes .toString().padStart(2, "0");
return `${formattedHours}:${formattedMinutes}`;
}