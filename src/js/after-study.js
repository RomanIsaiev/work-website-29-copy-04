const button = document.querySelector(".study-read-more");
const list = document.querySelector(".after-study-list");
const listItem2 = document.querySelector(
  ".after-study-list .list-item:nth-child(2)"
);
const listItem2After = document.querySelector(
  ".after-study-list .list-item:nth-child(2)::after"
);

button.addEventListener("click", openList);

function openList() {
  list.classList.toggle("study-open");

  list.classList.contains("study-open")
    ? (button.textContent = "закрити")
    : (button.textContent = "читати більше");
}
