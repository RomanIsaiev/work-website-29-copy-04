const button = document.querySelector(".for-whom-button");
const list = document.querySelector(".for-whom-list");
const listItem = document.querySelectorAll(".for-whom-list .list-item");

button.addEventListener("click", click);

function click() {
  list.classList.toggle("list-open");

  listItem.forEach((item) => {
    item.classList.toggle("list-open");
  });

  list.classList.contains("list-open")
    ? (button.textContent = "закрити")
    : (button.textContent = "читати більше");
}
