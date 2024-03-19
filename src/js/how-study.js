const button = document.querySelector(".how-study-button");
const wrapper = document.querySelector(".how-study-wrapper");
const wrapperAfter = document.querySelector(".how-study-wrapper::after");

button.addEventListener("click", openWrapper);

function openWrapper() {
  wrapper.classList.toggle("open-wrapper");

  wrapper.classList.contains("open-wrapper")
    ? (button.textContent = "закрити")
    : (button.textContent = "читати більше");
}
