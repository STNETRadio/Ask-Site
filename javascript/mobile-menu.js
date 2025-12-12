document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-btn');
  const header = document.querySelector('header');

  if (hamburger && header) {
    hamburger.addEventListener('click', () => {
      header.classList.toggle('mobile-nav-open');
      document.body.classList.toggle('no-scroll');
    });
  }
});
