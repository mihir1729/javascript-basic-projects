// // My Method
// let count = 0;

// const increase = document.querySelector(`.increase`);
// const decrease = document.querySelector(`.decrease`);
// const reset = document.querySelector(`.reset`);
// const counter = document.querySelector(`#value`);
// const container = document.querySelector(`.container`);

// increase.addEventListener(`click`, function () {
//   counter.textContent = Number(counter.textContent) + 1;
// });

// decrease.addEventListener(`click`, function () {
//   counter.textContent = Number(counter.textContent) - 1;
// });

// reset.addEventListener(`click`, function () {
//   counter.textContent = 0;
// });

// container.addEventListener(`click`, function () {
//   if (counter.textContent > 0) {
//     counter.style.color = `green`;
//   } else if (counter.textContent < 0) {
//     counter.style.color = `red`;
//   } else {
//     counter.style.color = ``;
//   }
// });

// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector(`#value`);
const btns = document.querySelectorAll(`.btn`);

btns.forEach(function (btn) {
  btn.addEventListener(`click`, function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains(`decrease`)) {
      count--;
    } else if (styles.contains(`increase`)) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = `red`;
    } else if (count > 0) {
      value.style.color = `green`;
    } else {
      value.style.color = `#222`;
    }
    value.textContent = count;
  });
});
