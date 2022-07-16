const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(`.giveaway`);
const deadline = document.querySelector(`.deadline`);
const items = document.querySelectorAll(`.deadline-format h4`);

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
console.log(tempDate);
// let futureDate = new Date(2022, 5, 23, 8, 11, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay, 8, 32, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${mins}am`;

//future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  //1s = 1000ms
  //1m = 60s
  //1hr = 60m
  //1d = 24hr

  //value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = oneDay / 24;
  const oneMinute = oneHour / 60;
  //calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(minutes);
  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
