const burger = document.querySelector('#burger-menu');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  [burger, menu].forEach((el) => {
    el.classList.toggle('active');
  });
});

['resize', 'scroll'].forEach((event) => {
  window.addEventListener(event, () => {
    menu.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  target = e.target;
  if (!menu.contains(target) && !burger.contains(target)) {
    menu.classList.remove('active');
  }
});
