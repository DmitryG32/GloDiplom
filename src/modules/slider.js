const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const sliderItems = sliderBlock.querySelectorAll(".item");

  const portfolioDots = document.querySelector(".slick-dots");
  const newArrDots = [];

  let currentIndex = 0;
  let dots;

  const createDots = () => {
    for (let i = 0; i < sliderItems.length; i++) {
      const newDot = document.createElement("li");
      newDot.classList.add("dot");
      newArrDots[i] = newDot;
      portfolioDots.append(newArrDots[i]);
    }
    newArrDots[0].classList.add("slick-active");
    dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        sliderMove();
      });
    });
  };

  const sliderMove = () => {
    if (currentIndex < sliderItems.length) {
      sliderItems.forEach((item) => {
        item.style.order = "0";
        item.style.opacity = "0";
      });
    } else {
      currentIndex = 0;

      sliderItems.forEach((item) => {
        item.style.order = "0";
        item.style.opacity = "0";
      });
    }

    sliderItems[currentIndex].style.opacity = "1";
    sliderItems[currentIndex].style.order = "-1";
    dots.forEach((dot) => {
      dot.classList.remove("slick-active");
    });
    dots[currentIndex].classList.add("slick-active");
    currentIndex++;
  };

  portfolioDots.style.zIndex = "15";
  sliderBlock.style.display = "flex";
  sliderBlock.style.flexDirection = "column";

  sliderItems.forEach((item) => {
    item.style.minHeight = sliderBlock.clientHeight + "px";
    item.style.opacity = "0";
    item.style.transition = "all .5s";
  });

  setInterval(() => {
    sliderMove();
  }, 3000);

  createDots();
  sliderMove();
};

export default slider;
