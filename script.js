function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector('.animated-text');
  const textContent = text.textContent;
  text.innerHTML = '';

  for (let i = 0; i < textContent.length; i++) {
    const span = document.createElement('span');
    span.textContent = textContent[i];
    text.appendChild(span);
  }

  const spans = text.querySelectorAll('span');
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = '1';
      span.style.visibility = 'visible';
      span.style.animation = `fadeIn 0.5s ease forwards`;
    }, index * 100);
  });
});

