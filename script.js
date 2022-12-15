/* Slider */

var slider = tns({
  container: ".my-slider",
  items: 1,
  controls: false,
  nav: true,
  fixedWidth: 210,
  gutter: 20,
  edgepadding: 20,
  loop: true,
  navPosition: "bottom",
  touch: true,
  mouseDrag: true,
  responsive: {
    425: {
      slideBy: "page",
      autoWidth: 490,
      items: 2,
      gutter: 50,
    },
    768: {
      items: 3,
      edgepadding: 0,
    },
    1024: {
      items: 4,
    },
    1440: {
      items: 4,
    },
  },
});

/* Tabs */

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".schedule__list");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

/* Mobiletabs */

const mobileTabs = document.querySelectorAll(".tab__button__mobile");
const mobileTabContents = document.querySelectorAll(".tab__content__mobile");

mobileTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    mobileTabContents.forEach((content) => {
      content.classList.remove("active");
    });
    mobileTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    mobileTabContents[index].classList.add("active");
    mobileTabs[index].classList.add("active");
  });
});
