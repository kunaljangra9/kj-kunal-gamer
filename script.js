document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Slider
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slides");
  const dotsContainer = document.querySelector(".dots");

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlides(slideIndex = i));
    dotsContainer.appendChild(dot);
  });

  function showSlides(n) {
    slides.forEach(s => s.style.display = "none");
    const dots = document.querySelectorAll(".dot");
    dots.forEach(d => d.classList.remove("active-dot"));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active-dot");
  }

  function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 4000); // 4s delay
  }

  // Initialize
  showSlides(slideIndex);
  autoSlide();
});


// Auto-sliding fullscreen slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // 4 seconds
}

function toggleMenu() {
  const menuLinks = document.getElementById('menu-links');
  menuLinks.classList.toggle('active');
}


function toggleMenu() {
  const menuLinks = document.getElementById('menu-links');
  menuLinks.classList.toggle('active');
}


function toggleMenu() {
  const menuLinks = document.getElementById('menu-links');
  menuLinks.classList.toggle('active');
}



