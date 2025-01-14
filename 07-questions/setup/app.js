//using selectors inside the element

const questions = document.querySelectorAll(`.question`);

questions.forEach(function (question) {
  const btn = question.querySelector(`.question-btn`);
  btn.addEventListener(`click`, function () {
    questions.forEach(function (e) {
      if (e != question) {
        e.classList.remove(`show-text`);
      }
    });
    question.classList.toggle(`show-text`);
  });
});

// traversing the dom

// const btns = document.querySelectorAll(`.question-btn`);

// btns.forEach(function (btn) {
//   btn.addEventListener(`click`, function (e) {
//     let ques = e.currentTarget.parentElement.parentElement;
//     ques.classList.toggle(`show-text`);
//   });
// });
