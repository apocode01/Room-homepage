const openMenuBtn = document.querySelector(`.open_menu`);
const menuPanel = document.querySelector(`.menu_panel`);
const closeMenuBtn = document.querySelector(`.close_menu`);
const navbarCategories = document.querySelector(`.navbar_categories`);
const overlay = document.querySelector(`.overlay`);
const prevBtn = document.querySelector(`.prev_btn`);
const nextBtn = document.querySelector(`.next_btn`);
const prevBtnDesktop = document.querySelector(`.prev_btn_desktop`);
const nextBtnDesktop = document.querySelector(`.next_btn_desktop`);
const mainTitle = document.querySelectorAll(`.main_title`)
const mainDescription = document.querySelectorAll(`.main_description`)
const heroImg = document.querySelectorAll(`.hero_img`)
console.log(prevBtn)

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

content_idx = 0

prevBtn.addEventListener('click', () => {
    mainTitle[content_idx].classList.add(`hidden`);
    mainDescription[content_idx].classList.add(`hidden`);
    heroImg[content_idx].classList.add(`hidden`);

    // decrement index and wrap idx 0 to idx 2
    content_idx = (content_idx + 2) % 3;
    mainTitle[content_idx].classList.remove(`hidden`);
    mainDescription[content_idx].classList.remove(`hidden`);
    heroImg[content_idx].classList.remove(`hidden`);
})

nextBtn.addEventListener('click', () => {
    mainTitle[content_idx].classList.add(`hidden`);
    mainDescription[content_idx].classList.add(`hidden`);
    heroImg[content_idx].classList.add(`hidden`);

    // increment index and wrap idx 3 to idx 0
    content_idx = (content_idx + 1) % 3;
    mainTitle[content_idx].classList.remove(`hidden`);
    mainDescription[content_idx].classList.remove(`hidden`);
    heroImg[content_idx].classList.remove(`hidden`);
})

prevBtnDesktop.addEventListener('click', () => {
    mainTitle[content_idx].classList.add(`hidden`);
    mainDescription[content_idx].classList.add(`hidden`);
    heroImg[content_idx].classList.add(`hidden`);

    // decrement index and wrap idx 0 to idx 2
    content_idx = (content_idx + 2) % 3;
    mainTitle[content_idx].classList.remove(`hidden`);
    mainDescription[content_idx].classList.remove(`hidden`);
    heroImg[content_idx].classList.remove(`hidden`);
})

nextBtnDesktop.addEventListener('click', () => {
    mainTitle[content_idx].classList.add(`hidden`);
    mainDescription[content_idx].classList.add(`hidden`);
    heroImg[content_idx].classList.add(`hidden`);

    // increment index and wrap idx 3 to idx 0
    content_idx = (content_idx + 1) % 3;
    mainTitle[content_idx].classList.remove(`hidden`);
    mainDescription[content_idx].classList.remove(`hidden`);
    heroImg[content_idx].classList.remove(`hidden`);
})