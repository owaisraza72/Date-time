// Task: Current date and time ko browser mein display karo.
let date = new Date();
document.write(
  `Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
);

function time() {
  date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");

  let total = `Time: ${hour}:${min}:${sec}`;

  let clock = document.getElementById("clock");
  clock.innerText = total;
}

setInterval(time, 1000);

// weekend checker
let n = new Date();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

let userDay = days[n.getDay()];
if (userDay === "Sun" || userDay === "Sat") {
  alert("Weekend Day");
  document.write("Weekend Day");
} else {
  alert("Workind Day");
  console.log("Working Day");
}

//past days aj tak kitna  hwai
function day(dates) {
  let now = new Date(dates);
  let date = new Date();
  let diffDate = date - now;
  let total = Math.floor(diffDate / (1000 * 60 * 60 * 24));

  return `Past Days = ${total}`;
}
console.log(day("2024-01-01"));

//kitna firday month m hen

function countFridays(month, year) {
  let count = 0;
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return `${count} Friday`;
}

console.log(countFridays(5, 2024));

// format date

function formatDate(dateInput) {
  let now = new Date(dateInput);
  let day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let userDay = day[now.getDay()];
  let userDate = now.getDate();

  let userMonth = month[now.getMonth()];
  let year = now.getFullYear();

  return `${userDay} ${userDate} ${userMonth} ${year}`;
}

console.log(formatDate("2025-04-20"));
console.log(formatDate(new Date()));

//show goodmorning

let abc = new Date();

let hour = abc.getHours();

if (hour >= 5 && hour < 12) {
  alert("Good Morning");
} else if (hour >= 12 && hour < 17) {
  alert("Good Afternoon");
} else if (hour >= 17 && hour < 21) {
  alert("Good Evening");
} else {
  alert("Good Night");
}
