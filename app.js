const modalBtn = document.querySelector(".btn_modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  console.log("hello");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
