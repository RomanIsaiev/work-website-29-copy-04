const button = document.querySelector(".about-author-button");
const list = document.querySelector(".about-author-list");
const listItem2Content = document.querySelector(
  ".about-author-list .list-item:nth-child(2)"
);

button.addEventListener("click", readMore);

function readMore() {
  list.classList.toggle("author-open");
  list.classList.contains("author-open")
    ? (listItem2Content.textContent =
        "Моя місія — це допомога кожному, хто прагне поглибити свої знання у вині, щоб вибирати якісні вина й не тільки «по кольору очей», але й з розумінням його характеру, в будь-якому бюджеті, та відчувати задоволення від вибору вина, й від кожного ковтка.")
    : (listItem2Content.textContent = "Моя місія...");

  list.classList.contains("author-open")
    ? (button.textContent = "закрити")
    : (button.textContent = "читати більше");
}
