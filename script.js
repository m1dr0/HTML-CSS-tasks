// карусель фото
const imageArrows = document.querySelectorAll(".portfolio-items__img");
const rightButton = document.getElementById("right-btn");
const leftButton = document.getElementById("left-btn");
const fullImage = document.querySelector(".portfolio-items__img-full img");
let currentIndex = 1;

function updateImage(index) {
  fullImage.src = imageArrows[index].src;
}
updateImage(currentIndex);

imageArrows.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateImage(currentIndex);
  });
});

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageArrows.length;
  updateImage(currentIndex);
});
leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageArrows.length) % imageArrows.length;
  updateImage(currentIndex);
});

//модалка
const modalOpenButton = document.getElementById("modalOpen");
const modal = document.getElementById("modalContact");
const modalSubmitButton = document.getElementById("modalSubmitBtn");
const inputName = document.getElementById("inputName");
const inputPhone = document.getElementById("inputPhone");
modalOpenButton.addEventListener("click", function () {
  modal.style.display = "block";
});

modalSubmitButton.addEventListener("click", function () {
  const name = inputName.value;
  const phoneNum = inputPhone.value;
	
	if (name == "")
		alert("Поле \"Имя\" обязательно для заполнения");
	else if (!name.match(/^[а-яА-Я]{1,20}$/))
		alert("Поле \"Имя\" заполнено некорректно");
	else if (phoneNum == "")
		alert("Поле \"Телефон\" обязательно для заполнения");
	else if (!phoneNum.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/))
		alert("Поле \"Телефон\" заполнено некорректно");
	else modal.style.display = "none";
});

const closeBtn = document.getElementById("modalCloseBtn")
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});