const openMenuBtn = document.querySelector(`.open_menu`);
const menuPanel = document.querySelector(`.menu_panel`);
const closeMenuBtn = document.querySelector(`.close_menu`);
const navbarCategories = document.querySelector(`.navbar_categories`);
const overlay = document.querySelector(`.overlay`);

openMenuBtn.addEventListener('click', () => {
    menuPanel.classList.add(`open`);
    navbarCategories.classList.remove(`hidden`);
    overlay.classList.add(`active`);
})

closeMenuBtn.addEventListener('click', () => {
    menuPanel.classList.remove(`open`);
    navbarCategories.classList.add(`hidden`);
    overlay.classList.remove(`active`);
})