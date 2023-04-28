let w = innerWidth;
const slider = document.querySelector(".list");
let isDown = false;
let startX;
let scrollLeft;

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
    walk = (x - startX) * 2;
  } else {
    walk = (x - startX) * 1;
  }
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
