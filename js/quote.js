/**
 * AZ Aluminium - Smart Multi-Step Flow
 */

let currentStepIndex = 1;

function handleFlow() {
  if (currentStepIndex === 1) {
    const w = document.getElementById("width").value;
    const d = document.getElementById("depth").value;

    if (w > 0 && d > 0) {
      showStep(2);
    } else {
      alert("Please specify the Width and Depth for accurate calculation.");
    }
  } else {
    alert("Configuration Saved. Requesting Quote...");
  }
}

function showStep(n) {
  const s1 = document.getElementById("step-1");
  const s2 = document.getElementById("step-2");
  const brd1 = document.getElementById("brd-1");
  const brd2 = document.getElementById("brd-2");
  const btnNext = document.getElementById("mainBtn");
  const btnPrev = document.getElementById("prevBtn");

  if (n === 2) {
    s1.classList.add("d-none");
    s2.classList.remove("d-none");

    brd1.classList.add("opacity-50");
    brd2.classList.remove("opacity-50", "text-muted");
    brd2.classList.add("active");

    btnPrev.style.display = "flex";
    btnNext.innerHTML = 'SEND REQUEST <i class="fas fa-paper-plane ms-2"></i>';

    currentStepIndex = 2;
  } else {
    s2.classList.add("d-none");
    s1.classList.remove("d-none");

    brd2.classList.add("opacity-50");
    brd1.classList.remove("opacity-50");

    btnPrev.style.display = "none";
    btnNext.innerHTML = "NEXT: CONTACT DETAILS";

    currentStepIndex = 1;
  }

  window.scrollTo({ top: 150, behavior: "smooth" });
}

function selectCard(el, group) {
  const parent = el.closest(".row");
  parent
    .querySelectorAll(".finish-card")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
}
