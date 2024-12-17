const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
  
    let currentIndex = 0;
  
    const updateCarousel = () => {
      items.forEach((item, index) => {
        item.classList.remove("active");
        if (index === currentIndex) {
          item.classList.add("active");
        }
      });
    };
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });
  
    updateCarousel();
  });
  