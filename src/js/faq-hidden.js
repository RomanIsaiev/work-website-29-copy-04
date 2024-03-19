const button = document.querySelector(".faq-two-button");
const faqWrapper = document.querySelector(".faq-two");
const faqItem = document.querySelector(".question-two");

button.addEventListener("click", openFaq);

function openFaq() {
  faqWrapper.classList.toggle("faq-open");

  faqWrapper.classList.contains("faq-open")
    ? (button.textContent = "закрити")
    : (button.textContent = "читати більше");
}
