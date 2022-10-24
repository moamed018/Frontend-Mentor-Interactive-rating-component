const submitBtn = document.querySelector(".submit");
const btns = document.querySelector(".btns");
const btnsList = document.querySelectorAll(".btn");
const selectedNum = document.querySelector(".selected-num");
const innerCard = document.querySelector(".inner-card");
let number;

btns.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("circle")) {
    btnsList.forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");
    number = +target.dataset.num;
  }
});

submitBtn.addEventListener("click", function () {
  if (number >= 1 && number <= 5) {
    selectedNum.textContent = number;
    innerCard.style.transform = "rotateY(180deg)";
  }
});
