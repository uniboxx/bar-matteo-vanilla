const burger = document.querySelector('#burger-menu');
const menu = document.querySelector('#menu');

function handleClass(className, action, ...els) {
  els.forEach((el) => el.classList[action](className));
}

burger.addEventListener('click', () => {
  handleClass('active', 'toggle', menu, burger);
});

['resize', 'scroll'].forEach((event) => {
  window.addEventListener(event, () => {
    handleClass('active', 'remove', menu, burger);
  });
});

document.addEventListener('click', (e) => {
  target = e.target;
  if (!menu.contains(target) && !burger.contains(target)) {
    handleClass('active', 'remove', menu, burger);
  }
});
