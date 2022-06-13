const accordeon = () => {
  const accordeonBlock = document.querySelector(".accordeon");
  const accorItems = accordeonBlock.querySelectorAll(".element");
  const accorText = accordeonBlock.querySelectorAll(".element-content");

  accorText.forEach((block, index) => {
    if (accorItems[index] != accorItems[0]) {
      block.style.transition = "all .5s";
      block.style.overflow = "hidden";
      block.style.maxHeight = "0px";
      block.style.padding = "0 20px";
      block.style.display = "block";
    }
  });

  accorItems.forEach((elem) => {
    const descr = elem.querySelector(".element-content");

    elem.addEventListener("click", () => {
      accorText.forEach((tab, index) => {
        if (tab == descr && accorItems[index].classList.contains("active")) {
          accorItems[index].classList.remove("active");
          accorItems[index].style.paddingBottom = "0px";
          tab.style.transition = "all .5s";
          tab.style.overflow = "hidden";
          tab.style.maxHeight = "0px";
          tab.style.padding = "0 20px";
          tab.style.display = "block";
        } else if (tab == descr) {
          accorItems[index].classList.add("active");
          accorItems[index].style.paddingBottom = "20px";
          tab.style.padding = "20px 20px 0";
          tab.style.maxHeight = tab.scrollHeight + 20 + "px";
        } else {
          accorItems[index].classList.remove("active");
          accorItems[index].style.paddingBottom = "0px";
          tab.style.transition = "all .5s";
          tab.style.overflow = "hidden";
          tab.style.maxHeight = "0px";
          tab.style.padding = "0 20px";
          tab.style.display = "block";
        }
      });
    });
  });
};

export default accordeon;
