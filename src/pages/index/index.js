const button = document.querySelector('.header__nav-btn');
const navItem = document.querySelectorAll('.navigation__item');
const anyClick = document.querySelector('.page');

function openCloseMenu (event) {
  if ((button.classList.value === 'header__nav-btn')
    &&(event.target.classList.value !== 'header__nav-btn')) {
    // Если меню закрыто и клик был мимо кнопки, ничего не происходит
    // Таким образом, отрывается меню только по клику на иконку,
    // а закрывается кликом по кресту, по ссылке, или мимо меню
  } else {
    for (let i=0; i < navItem.length; i++) {
      navItem[i].classList.toggle('navigation__open');
    }
    button.classList.toggle('header__nav-btn-bg');
  }
}

anyClick.addEventListener('click', openCloseMenu);