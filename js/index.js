function changeHero(index) {
  const heroSection = document.getElementById("hero");
  const title = document.getElementById("hero-title");
  const desc = document.getElementById("hero-desc");
  const tag = document.getElementById("hero-tag");
  const thumbs = document.querySelectorAll(".hero-thumb");

  const content = document.querySelector(".hero-content");
  content.classList.add("fade-out");

  setTimeout(() => {
    heroSection.style.backgroundImage = `linear-gradient(rgba(20, 27, 61, 0.5), rgba(20, 27, 61, 0.5)), url('${heroData[index].img}')`;
    title.innerHTML = heroData[index].title;
    desc.innerText = heroData[index].desc;
    tag.innerText = heroData[index].tag;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumbs[index].classList.add("active");

    content.classList.remove("fade-out");
  }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".reveal, .step-reveal");

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
function scrollV2(distance) {
  const slider = document.getElementById("sliderV2");
  slider.scrollBy({ left: distance, behavior: "smooth" });
}

const sliderV2 = document.getElementById("sliderV2");
const progressBar = document.getElementById("p-bar");

sliderV2.addEventListener("scroll", () => {
  const scrollPercentage =
    (sliderV2.scrollLeft / (sliderV2.scrollWidth - sliderV2.clientWidth)) * 100;
  progressBar.style.width = scrollPercentage + "%";
});
const allGalleryImgs = document.querySelectorAll(".gallery-item img");
let activeIndex = 0;
const mainModalImg = document.getElementById("modalImg");

function openLightbox(index) {
  activeIndex = index;
  updateLightboxContent();
  var myModal = new bootstrap.Modal(document.getElementById("lightboxModal"));
  myModal.show();
}

function updateLightboxContent() {
  mainModalImg.src = allGalleryImgs[activeIndex].src;

  mainModalImg.style.opacity = "0";
  mainModalImg.style.transform = "scale(0.9)";

  setTimeout(() => {
    mainModalImg.style.transition = "0.5s cubic-bezier(0.19, 1, 0.22, 1)";
    mainModalImg.style.opacity = "1";
    mainModalImg.style.transform = "scale(1)";
  }, 100);
}

function nextImg() {
  activeIndex = (activeIndex + 1) % allGalleryImgs.length;
  updateLightboxContent();
}

function prevImg() {
  activeIndex =
    (activeIndex - 1 + allGalleryImgs.length) % allGalleryImgs.length;
  updateLightboxContent();
}
