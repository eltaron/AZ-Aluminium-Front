function filterCatalog(category, btn) {
  document.querySelectorAll(".products-panel").forEach((panel) => {
    panel.classList.remove("active-panel");
  });

  document.querySelectorAll(".switch-btn").forEach((b) => {
    b.classList.remove("active");
  });

  const targetPanel = document.getElementById(category + "-panel");
  targetPanel.classList.add("active-panel");
  btn.classList.add("active");

  const elements = targetPanel.querySelectorAll(".reveal");
  elements.forEach((el) => el.classList.add("active"));
}

function swapImage(element, imgSrc) {
  const mainImg = document.getElementById("mainProductImg");
  mainImg.style.opacity = "0";

  setTimeout(() => {
    mainImg.src = imgSrc;
    mainImg.style.opacity = "1";
  }, 200);

  const thumbs = document.querySelectorAll(".product-thumb");
  thumbs.forEach((t) => t.classList.remove("active"));
  element.classList.add("active");
}
function pickColor(el) {
  const dots = document.querySelectorAll(".color-dot");
  dots.forEach((dot) => dot.classList.remove("selected"));
  el.classList.add("selected");
}
function scrollProjects(distance) {
  const slider = document.getElementById("projectsSlider");
  slider.scrollBy({ left: distance, behavior: "smooth" });
}

const projSlider = document.getElementById("projectsSlider");
const projBar = document.getElementById("proj-p-bar");

projSlider.addEventListener("scroll", () => {
  const scrollPercent =
    (projSlider.scrollLeft /
      (projSlider.scrollWidth - projSlider.clientWidth)) *
    100;
  projBar.style.width = scrollPercent + "%";
});
function slideProjects(direction) {
  const slider = document.getElementById("projectsSlider");
  const scrollAmount = 450;

  if (direction === "next") {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
}
