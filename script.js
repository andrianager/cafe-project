// ---------- 1. მობილურის მენიუ ----------
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// ---------- 2. სლაიდერი ----------
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", function () {
  current = current + 1;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
});

prevBtn.addEventListener("click", function () {
  current = current - 1;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
});

// ---------- 3. ფორმა ----------
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const drink = document.getElementById("drink");
  const drinkName = drink.options[drink.selectedIndex].text;

  formMessage.textContent =
    "მადლობა, " + name + "! თქვენ აირჩიეთ: " + drinkName + ". შეტყობინება გაიგზავნა.";

  form.reset();
});
