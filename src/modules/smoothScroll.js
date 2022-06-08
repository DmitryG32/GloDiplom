const smoothScroll = () => {
  const menuBtnAll = document.querySelectorAll(".top-menu a");

  menuBtnAll.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      const section = document.querySelector(elem.getAttribute("href"));

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

export default smoothScroll;
