"use strict";
const showClock = document.querySelector(".clock");

const clock = setInterval(function () {
  const date = new Date();
  const hour = `${date.getHours()}`.padStart(2, 0);
  const min = `${date.getMinutes()}`.padStart(2, 0);
  const sec = `${date.getSeconds()}`.padStart(2, 0);
  const display = `${hour < 12 ? hour : hour - 12}:${min}:${
    hour < 12 ? sec + " AM" : sec + " PM"
  }`;
  showClock.textContent = display;
  console.log(date);
}, 1000);
