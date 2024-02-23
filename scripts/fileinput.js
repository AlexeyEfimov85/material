const input = document.querySelector("#file");
const text = document.querySelector(".form__text_file");

input.addEventListener("change", () => {
  if (input.files.length) {
    text.textContent = input.files[0].name;
  } else {
    text.textContent = 'Прикрепить файл';
  }
});
