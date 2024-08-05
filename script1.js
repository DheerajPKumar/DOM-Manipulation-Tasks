const cont = document.getElementsByClassName("container")[0];
const inputText = Array.from(document.getElementsByClassName("container__inputEl"));

const btn = Array.from(document.getElementsByClassName("container__btn"));

btn[0].addEventListener("click", function() {
  let text = inputText[0].value;
  console.log(text);
  inputText[0].value = "";
});
