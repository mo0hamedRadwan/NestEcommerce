export function formatTime(time: number) {
  const days = Math.floor(time / 3600 / 24);
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // const Days = days < 9 ? "0" + days : "" + days;
  // const Hours = hours < 9 ? "0" + hours : "" + hours;
  // const Minutes = minutes < 9 ? "0" + minutes : "" + minutes;
  // const Seconds = seconds < 9 ? "0" + seconds : "" + seconds;

  return [
    { timeType: "Days", number: `${days < 9 ? "0" : ""}${days}` },
    { timeType: "Hours", number: `${hours < 9 ? "0" : ""}${hours}` },
    { timeType: "Mins", number: `${minutes < 9 ? "0" : ""}${minutes}` },
    { timeType: "Sec", number: `${seconds < 9 ? "0" : ""}${seconds}` },
  ];
}
