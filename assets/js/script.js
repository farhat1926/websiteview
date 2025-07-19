const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-left, .fade-right, .fade-up, .fade-in').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      alert('Artikel lengkap akan ditampilkan!');
    });
  });