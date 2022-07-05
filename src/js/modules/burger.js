export function activateBurgerMenu() {
  const burger = document.querySelector('.header__burger');
  const popup = document.querySelector('.menu__popup');
  const navList = document.querySelector('.links-list');
  const ovalBtn = document.querySelector('[data-type="enroll"]')

  const renderPopup = (...args) => {
    if (popup.innerHTML !== '') { return; }
    args.forEach(el => {
      const clone = el.cloneNode(true)
      popup.appendChild(clone);
    })
  }

  const burgerHandler = (e) => {
    e.preventDefault();
    burger.classList.toggle('header__burger_active');
    popup.classList.toggle('menu__popup_open');
    renderPopup(navList, ovalBtn);
  }

  burger.addEventListener('click', burgerHandler);
}
