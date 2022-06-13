const sliderServices = () => {
  const servicesCarousel = document.querySelector(".services-carousel");
  const servicesElements = document.querySelector(".services-elements");
  const servicesItems = servicesCarousel.querySelectorAll(".col-md-4");
  const servicesArrow = document.querySelector(".services-arrow");

  const sumItems = 3;

  let offset = 0;
  let offsetWidth;
  let sliderStop;

  servicesCarousel.style.display = "flex";
  servicesCarousel.style.position = "relative";
  servicesCarousel.style.transition = "all 0.3s ease 0s";
  servicesCarousel.style.left = "0px";
  servicesElements.style.overflow = "hidden";

  servicesItems.forEach((item) => {
    item.style.minWidth = "33.333%";
    offsetWidth = item.offsetWidth;
  });

  const prevSlide = (elem) => {
    elem.style.left = -offset + "px";
  };

  const nextSlide = (elem) => {
    elem.style.left = -offset + "px";
  };

  sliderStop = (servicesItems.length - sumItems) * offsetWidth;

  servicesArrow.addEventListener("click", (e) => {
    if (e.target.matches(".arrow-left")) {
      offset -= +offsetWidth;

      if (offset < 0) {
        offset = sliderStop;
      }

      prevSlide(servicesCarousel);
    } else if (e.target.matches(".arrow-right")) {
      offset += +offsetWidth;

      if (offset > sliderStop) {
        offset = 0;
      }

      nextSlide(servicesCarousel);
    }
  });
};

export default sliderServices;
