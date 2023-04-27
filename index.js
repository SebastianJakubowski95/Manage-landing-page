let w = innerWidth;
const slider = document.querySelector(".list");
let isDown = false;
let startX;
let scrollLeft;

function showModal() {
  $("#burger").addClass("hide");
  $("#close").removeClass("hide");
  $("#modal").removeClass("hide");
  $("body").addClass("prevent-scroll");
}

function hideModal() {
  $("#burger").removeClass("hide");
  $("#close").addClass("hide");
  $("#modal").addClass("hide");
  $("body").removeClass("prevent-scroll");
}

if (w <= 768) {
  $("#header-cta").addClass("hide");
  $("#navbar").addClass("hide");
  $("#burger").removeClass("hide");
}

$("#burger").on("click", () => {
  showModal();
});

$("#close").on("click", () => {
  hideModal();
});

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  let walk;
  if (w <= 768) {
    walk = (x - startX) * 2; //scroll-fast
  } else {
    walk = (x - startX) * 1; //scroll-fast
  }
  // const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
