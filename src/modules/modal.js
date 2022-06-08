const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const body = document.querySelector("body");

  callbackBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
    });
  });
  body.addEventListener("click", (e) => {
    if (
      e.target.closest(".modal-close") ||
      e.target.classList.contains("modal-overlay")
    ) {
      modalCallback.style.display = "none";
      modalOverlay.style.display = "none";
    }

    if (e.target.matches("a[href='#feedback'")) {
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
    }
  });
};

export default modal;
