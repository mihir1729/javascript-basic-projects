const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(`#btn`);
const color = document.querySelector(`.color`);

btn.addEventListener(`click`, function () {
  // generating array of random hex code
  //this is my method, I used a loop instead of function
  let a = [];
  for (let i = 0; i < color.textContent.length; i++) {
    let random = Math.floor(Math.random() * hex.length);
    a[i] = hex[random];
  }
  //converting array to string
  let concatHex = `#`;
  for (let i = 1; i < color.textContent.length; i++) {
    concatHex += hex[randomNumber()];
  }
  color.textContent = concatHex;
  document.body.style.backgroundColor = concatHex;
});

//john used a function
function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
