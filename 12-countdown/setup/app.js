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

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items)

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()

// let futureDate = new Date(2021, 11, 25, 10, 5, 0)
// console.log(futureDate)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()
// console.log(months[month])
month = months[month];

const date = futureDate.getDate();
// console.log(date)

const weekday = weekdays[futureDate.getDay()];
// console.log(weekday)


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in ms

const futureTime = futureDate.getTime()
// console.log(futureTime)

const getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log(today)
  const t = futureTime - today;
  console.log(t)

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calcular los valores
  let days = t / oneDay;
  days = Math.floor(days)
  console.log(days)
  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours)
  console.log(hours)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  console.log(minutes)
  let seconds = Math.floor((t % oneMinute) / 1000)
  console.log(seconds)

  //set values array;
  const values = [days, hours, minutes, seconds]

  const format = (item) => {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
  }

};

//countDown
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();