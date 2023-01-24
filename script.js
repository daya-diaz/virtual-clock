const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let exactHours = dateToday.getHours();
  let exactMinutes = dateToday.getMinutes();
  let exactSeconds = dateToday.getSeconds();

  if (exactHours < 10) exactHours = "0" + exactHours;
  if (exactMinutes < 10) exactMinutes = "0" + exactMinutes;
  if (exactSeconds < 10) exactSeconds = "0" + exactSeconds;

  hours.textContent = exactHours;
  minutes.textContent = exactMinutes;
  seconds.textContent = exactSeconds;
});
